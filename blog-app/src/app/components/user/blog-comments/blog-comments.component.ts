import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.commentService.getComment(this.blogId).subscribe((response: any)=>{

if(response.success === true){
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
    console.log(response)
      if(response.success === true){
        this.commentForm.reset()
      }
    })

  }
}
