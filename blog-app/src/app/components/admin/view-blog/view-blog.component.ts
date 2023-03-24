import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent {
  @Input() show  !: boolean;
  @Input() popUpContent !: { _id: string, slug: string, title: string, content: string, status: string }

  @Output() closeModalEvent = new EventEmitter<boolean>()
  @Output() approveBlogEvent = new EventEmitter<string>()
  @Output() rejectBlogEvent = new EventEmitter<string>()

  emitCloseModalEvent() {
    this.closeModalEvent.emit(false)
  }

  approveBlog(postId: string) {
    this.approveBlogEvent.emit(postId)
    this.closeModalEvent.emit(false)
  }

  rejectBlog(postId: string) {
    this.rejectBlogEvent.emit(postId)
    this.closeModalEvent.emit(false)
  }
}
