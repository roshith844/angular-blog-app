import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommentService } from 'src/app/services/user/comments/comment.service';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css']
})
export class BlogCommentsComponent {
  @Input() blogId = '';
  constructor(private formBuilder: FormBuilder,
    private commentService: CommentService
  ) { }
  commentForm = this.formBuilder.group({
    comment: '',
  })

  onSubmit() {
    if (this.commentForm.value.comment === undefined || this.commentForm.value.comment === null) return
    if (this.blogId === undefined || this.blogId === null) return
    const comment: string = this.commentForm.value.comment
    this.commentService.addComment(this.blogId, comment).subscribe((response: any) => {
      console.log(response)
    })

  }
}
