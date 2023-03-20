import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AsyncSubject, Subject } from 'rxjs';
import { PostContentService } from 'src/app/services/writer/post-content.service';
import { type contentFormData } from 'src/app/types/formData';

//  import { maxLength } from './maxlength.validator';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  private editorSubject: Subject<any> = new AsyncSubject();

  constructor(private postContentService: PostContentService,
    private toastr: ToastrService) { }

  public myForm = new FormGroup({
    title: new FormControl(""), //
    body: new FormControl(""), //,maxLength(this.editorSubject, 10)
    slug: new FormControl("")
  });

  handleEditorInit(e: any) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  onSubmit() {
    if (!confirm("Are you sure you want to Submit this Blog?")) return
    if (this.myForm.value.title === '' || this.myForm.value.body == '' || this.myForm.value.slug === '') {
      this.toastr.error("Cant't post empty strings")
      return
    }

    if (typeof this.myForm.value.title != 'string' || typeof this.myForm.value.body != 'string' || typeof this.myForm.value.slug != 'string') {
      this.toastr.error("Something went Wrong")
      return
    }


    const CONTENT: contentFormData = {
      title: this.myForm.value.title,
      content: this.myForm.value.body,
      slug: this.myForm.value.slug

    }
    this.postContentService.postContent(CONTENT).subscribe((response: any) => {
      if (response.success === true) {
        this.toastr.success('Your Post was submitted')
      } else {
        this.toastr.error('Something Went Wrong')
      }
    })
    this.myForm.reset()
  }
}
