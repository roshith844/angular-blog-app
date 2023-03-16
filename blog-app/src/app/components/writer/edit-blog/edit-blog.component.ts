import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncSubject, Subject } from 'rxjs';
import { GetContentService } from 'src/app/services/writer/get-content.service';
import { PostContentService } from 'src/app/services/writer/post-content.service';
import { NgZone } from '@angular/core';
import { UpdateBlogService } from 'src/app/services/writer/update-blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  notificationMessage = ''
  private editorSubject: Subject<any> = new AsyncSubject();

  constructor(private postContentService: PostContentService,
    private getContentService: GetContentService,
    private activatedRoute: ActivatedRoute,
    private ngZone: NgZone,
    private updateBlogService: UpdateBlogService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  title = ''
  content = ''
  slug = ''
  articleId = ''
  public editBlogForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    slug: new FormControl('')
  });

  handleEditorInit(e: any) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  ngOnInit(): void {

    // Gets param
    const PARAM = this.activatedRoute.snapshot.paramMap.get('slug')
    if (PARAM == null) return
    this.slug = PARAM
    this.getContentService.getBlog(PARAM).subscribe((response: any) => {
      if (response.success == true) {
        this.articleId = response.data._id
        this.title = response.data.title
        this.slug = response.data.slug
        this.editorSubject.subscribe(editor => {
          this.ngZone.run(() => {
            editor.setContent(response.data.content);
          });
        });
      }
    })
  }

  onSubmit() {
    if (this.editBlogForm.value.title === '' || this.editBlogForm.value.body == '' || this.editBlogForm.value.slug === '' || this.articleId === '') return
    if (typeof this.editBlogForm.value.title != 'string' || typeof this.editBlogForm.value.body != 'string' || typeof this.editBlogForm.value.slug != 'string' || typeof this.articleId !== 'string') return

    // Update form control values with form values
    this.editBlogForm.controls.title.setValue(this.editBlogForm.value.title)
    this.editBlogForm.controls.slug.setValue(this.editBlogForm.value.slug)
    this.editBlogForm.controls.body.setValue(this.editBlogForm.value.body)

    const CONTENT: any = {
      title: this.editBlogForm.value.title,
      content: this.editBlogForm.value.body,
      slug: this.editBlogForm.value.slug,
      articleId: this.articleId
    }
    this.updateBlogService.updateBlog(CONTENT).subscribe((response: any) => {
      if (response.success == true) {
        this.router.navigate(['writer/posts'])
        this.toastr.success('Success', 'The Blog was Updated')
      } else {
        this.notificationMessage = 'Something Went Wrong'
        this.toastr.error('something Went Wrong')
      }
    })
  }

}
