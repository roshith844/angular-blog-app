import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { WriterAdminChatService } from 'src/app/services/writer/chat/writer-admin-chat.service';
import { DeleteBlogService } from 'src/app/services/writer/delete-blog.service';
import { WriterPostManangementService } from 'src/app/services/writer/writer-blog-manangement.service';

@Component({
  selector: 'app-posts-management',
  templateUrl: './posts-management.component.html',
  styleUrls: ['./posts-management.component.css']
})
export class PostsManagementComponent implements OnInit {
  activeBlogId !: string;
  activeBlogAuthor !: string
  canShowChat = false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>()
  activeChatMessages !: any[]
  constructor(public writerPostManangementService: WriterPostManangementService,
    private deleteBlogService: DeleteBlogService,
    private toastr: ToastrService,
    private chatService: WriterAdminChatService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
    this.writerPostManangementService.getBlogs().subscribe((response: any) => {
      this.writerPostManangementService.addAllBlogs(response.data)
      this.dtTrigger.next(null)
    })
  }

  deleteBlog(articleId: string) {
    if (!confirm("Are you sure you want to delete this item?")) return
    this.deleteBlogService.deleteBlog(articleId).subscribe((response: any) => {
      if (response.success === true) {
        this.writerPostManangementService.removeBlog(articleId)
        this.toastr.success('Deleted Successfully')
      } else {
        this.toastr.error('Something Went Wrong')
      }
    })
  }
  
  closeModal() {
    this.canShowChat = false
  }
  openChat(blogId: string, author: string) {
    this.chatService.getChatMessages(blogId).subscribe((response: any) => {
      if (response.success === true) this.activeChatMessages = response.data
    })
    this.activeBlogId = blogId
    this.activeBlogAuthor = author
    this.chatService.markAsRead(blogId)
    this.writerPostManangementService.clearUnreadMessagesCount(blogId)
    this.canShowChat = true
  }
}
