import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private postContentService: PostContentService) { }

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
    if ( this.myForm.value.title === '' || this.myForm.value.body == ''|| this.myForm.value.slug === '') return
    if (typeof this.myForm.value.title != 'string' || typeof this.myForm.value.body != 'string'|| typeof this.myForm.value.slug  != 'string' ) return

    const CONTENT: contentFormData = {
      title: this.myForm.value.title,
      content: this.myForm.value.body,
      slug: this.myForm.value.slug

    }
    this.postContentService.postContent(CONTENT).subscribe((response)=>{
      console.log(response)
    })
    this.myForm.reset()
  }
}
