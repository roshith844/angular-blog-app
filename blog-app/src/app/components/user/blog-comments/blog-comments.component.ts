import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    public userDetailsService: UserDetailsService
  ) { }

  ngOnInit(): void {
    this.commentService.getComment(this.blogId).subscribe((response: any) => {

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
        let newComment = { comments: response.data, userDetails: this.userDetailsService.getNameOfUser() }
        this.comments.unshift(newComment)
        this.commentForm.reset()
      }
    })
  }

  deleteComment(commentId: any,) {
    this.commentService.deleteComment(this.blogId, commentId).subscribe((response: any) => {
      console.log(response)
      if (response.success === true) {
        this.comments = this.comments.filter((element) => element.comments._id !== commentId)
      }
    })
  }
}
