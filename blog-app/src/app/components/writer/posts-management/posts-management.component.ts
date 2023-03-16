import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DeleteBlogService } from 'src/app/services/writer/delete-blog.service';
import { WriterPostManangementService } from 'src/app/services/writer/writer-blog-manangement.service';

@Component({
  selector: 'app-posts-management',
  templateUrl: './posts-management.component.html',
  styleUrls: ['./posts-management.component.css']
})
export class PostsManagementComponent implements OnInit {
  notificationMessage = ''
  constructor(public writerPostManangementService: WriterPostManangementService,
    private deleteBlogService: DeleteBlogService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.writerPostManangementService.getBlogs().subscribe((response: any) => {
      this.writerPostManangementService.addAllBlogs(response.data)
    })
  }

  deleteBlog(articleId: string) {
    if (!confirm("Are you sure you want to delete this item?")) return
    this.deleteBlogService.deleteBlog(articleId).subscribe((response: any) => {
      if (response.success === true) {
        this.writerPostManangementService.removeBlog(articleId)
        this.notificationMessage = 'deleted successfully'
        this.toastr.success('Deleted Successfully')
      } else {
        this.notificationMessage = 'something went wrong'
        this.toastr.error('Something Went Wrong')
      }
    })
  }
  closeNotification() {
    this.notificationMessage = ''
  }
}
