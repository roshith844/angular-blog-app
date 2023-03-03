import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  @Input() show = true;
  @Output() closeModalEvent = new EventEmitter<boolean>()
  @Input() profileDetails: {name: string, email: string} = {name: 'loading', email: 'loading'}

  onClose = new EventEmitter()

  emitCloseModalEvent() {
    this.closeModalEvent.emit(false);
  }
}
