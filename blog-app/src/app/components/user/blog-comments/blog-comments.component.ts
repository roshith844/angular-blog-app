import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { CommentService } from 'src/app/services/user/comments/comment.service';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css']
})
export class BlogCommentsComponent implements OnInit {
  @Input() blogId = '';
  isDropdownVisible = true
  comments!: any[]
  constructor(private formBuilder: FormBuilder,
    private commentService: CommentService,
    public userDetailsService: UserDetailsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    console.log('this should be equal')
  console.log(this.userDetailsService.userId)  
    this.commentService.getComment(this.blogId).subscribe((response: any) => {
      console.log(response)
      if (response.success === true) {
        console.log(response)
        this.comments = response.comments
      }
    })
  }

  commentForm = this.formBuilder.group({
    comment: '',
  })

  onSubmit() {
    if (this.commentForm.value.comment === undefined || this.commentForm.value.comment === null) return
    if (this.blogId === undefined || this.blogId === null) return
    const comment: string = this.commentForm.value.comment

    this.commentService.addComment(this.blogId, comment).subscribe((response: any) => {

      if (response.success === true) {
        // console.log(response)
        // console.log(this.userDetailsService.getProfilePictureOfUser())

        let newComment = { comments: response.data, userDetails: { name: this.userDetailsService.getNameOfUser(), profie_picture_url: this.userDetailsService.getProfilePictureOfUser()  } }
        this.comments.unshift(newComment)
        this.commentForm.reset()
        this.showSuccess('Success', 'Your comment was published')
      } else {
        this.showFailure()
      }
    })
  }

  deleteComment(commentId: any,) {
    this.commentService.deleteComment(this.blogId, commentId).subscribe((response: any) => {
      console.log(response)
      if (response.success === true) {
        this.comments = this.comments.filter((element) => element.comments._id !== commentId)
        this.showSuccess('Comment Deleted Successfully', '')
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

}
