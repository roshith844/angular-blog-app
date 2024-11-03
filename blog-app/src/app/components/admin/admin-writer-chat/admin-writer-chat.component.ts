import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminWriterChatService } from 'src/app/services/admin/chat/admin-writer-chat.service';

@Component({
  selector: 'app-admin-writer-chat',
  templateUrl: './admin-writer-chat.component.html',
  styleUrls: ['./admin-writer-chat.component.css'],
})
export class AdminWriterChatComponent {
  @Input() show = true;
  @Input() blogId!: string;
  @Input() author!: string;
  @Input() chatMessages: any[] = [];
  @Output() closeModalEvent = new EventEmitter<boolean>();

  onClose = new EventEmitter();
  messageForm = this.formBuilder.group({
    message: '',
  });
  constructor(
    private adminWriterChatService: AdminWriterChatService,
    private formBuilder: FormBuilder
  ) {}
  emitCloseModalEvent() {
    this.closeModalEvent.emit(false);
  }

  sendMessage() {
    if (typeof this.messageForm.value.message !== 'string') return;
    this.adminWriterChatService
      .postMessage(this.blogId, this.messageForm.value.message, this.author)
      .subscribe((response: any) => {
        if (response.success == true) {
          this.chatMessages.push({
            blogId: this.blogId,
            content: this.messageForm.value.message,
            type: 'admin-to-writer',
          });
          this.messageForm.reset();
        }
      });
  }
}
