import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { AdminWriterChatService } from 'src/app/services/admin/chat/admin-writer-chat.service';
import { AdminPostManagementService } from 'src/app/services/admin/posts/admin-post-management.service';

@Component({
  selector: 'app-posts-management-by-admin',
  templateUrl: './posts-management-by-admin.component.html',
  styleUrls: ['./posts-management-by-admin.component.css']
})
export class PostsManagementByAdminComponent implements OnInit {
  activeBlogId !: string;
  activeBlogAuthor !: string
  activeChatMessages !: any[]
  posts!: any[]
  canshowBlogContent = false
  canShowChat = false
  content!: { _id: string, slug: string, title: string, content: string, status: string }
  constructor(private adminPostManagementService: AdminPostManagementService,
    private toastr: ToastrService,
    private adminWriterChatService: AdminWriterChatService

  ) { }
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
    this.adminPostManagementService.getAllPosts().subscribe((response: any) => {
      console.log('.....................................')
      console.log(response.data)
      this.posts = response.data
      this.dtTrigger.next(null)
    })
  }

  approveBlog(postId: string) {
    if (!confirm("Are you sure you want to Approve this Blog?")) return
    this.adminPostManagementService.approveBlog(postId).subscribe((response: any) => {
      if (response.success === true) {
        const element = this.posts.find(item => item._id === postId);
        if (element) {
          element.status = 'published';
        }
        this.showSuccess('Blog Approved', 'The blog is published Now')
      } else {
        this.showFailure()
      }
    })
  }

  rejectBlog(postId: string) {
    if (!confirm("Are you sure you want to Reject this Blog?")) return
    this.adminPostManagementService.rejectBlog(postId).subscribe((response: any) => {
      if (response.success === true) {
        const element = this.posts.find(item => item._id === postId)
        if (element) {
          element.status = 'rejected';
        }
        this.showSuccess('blog Rejected Successfully', '')
      } else {
        this.showFailure()
      }
    })
  }

  showSuccess(title: string, description: string) {
    this.toastr.success(title, description)
  }

  showFailure() {
    this.toastr.error('Some went wrong', 'Please Try again!')
  }

  closeModal() {
    this.canshowBlogContent = false
    this.canShowChat = false
  }
  openContentPopUp(blogId: string) {
    this.adminPostManagementService.getBlog(blogId).subscribe((response: any) => {
      this.content = response.data[0]
    })
    this.canshowBlogContent = true
  }
  openChat(blogId: string, author: string) {
    this.adminWriterChatService.getChatMessages(blogId).subscribe((response: any) => {
      console.log(response)
      if (response.success === true) this.activeChatMessages = response.data
    })

    this.activeBlogId = blogId
    this.activeBlogAuthor = author

    this.adminWriterChatService.markAsRead(blogId).subscribe((response: any) => {
      console.log(response)
    })

const POST_TO_MODIFY = this.posts.find(post=> post._id === blogId)
if(POST_TO_MODIFY){
  POST_TO_MODIFY.unread = []
}

    this.canShowChat = true
  }

}
