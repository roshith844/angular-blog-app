import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBlogComponent } from '../components/admin/view-blog/view-blog.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    ViewBlogComponent
  ]
})
export class SharedModule { }
