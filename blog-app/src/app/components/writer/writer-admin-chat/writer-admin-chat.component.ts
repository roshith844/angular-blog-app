import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminWriterChatService } from 'src/app/services/admin/chat/admin-writer-chat.service';
import { WriterAdminChatService } from 'src/app/services/writer/chat/writer-admin-chat.service';

@Component({
  selector: 'app-writer-admin-chat',
  templateUrl: './writer-admin-chat.component.html',
  styleUrls: ['./writer-admin-chat.component.css']
})
export class WriterAdminChatComponent implements OnInit {
  @Input() show = true;
  @Input() blogId !: string
  @Input() author !: string
  @Input() chatMessages !: any[]
  @Output() closeModalEvent = new EventEmitter<boolean>()

  onClose = new EventEmitter()
  messageForm = this.formBuilder.group({
    message: ''
  })

  ngOnInit(): void {

  }

  constructor(private chatService: WriterAdminChatService, private formBuilder: FormBuilder) {

  }
  emitCloseModalEvent() {
    this.closeModalEvent.emit(false);
  }

  sendMessage() {
    if (typeof this.messageForm.value.message !== 'string') return
    console.log(this.chatMessages)
    this.chatService.postMessage(this.blogId, this.messageForm.value.message, this.author).subscribe((response: any) => {
      if (response.success == true){
        this.chatMessages.push({blogId: this.blogId, content: this.messageForm.value.message, type: 'writer-to-admin'})
        this.messageForm.reset()
      } 
    })
  }

}
