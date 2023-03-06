import { Component, OnInit } from '@angular/core';
import { WriterPostManangementService } from 'src/app/services/writer/writer-post-manangement.service';

@Component({
  selector: 'app-posts-management',
  templateUrl: './posts-management.component.html',
  styleUrls: ['./posts-management.component.css']
})
export class PostsManagementComponent implements OnInit {
  constructor(public writerPostManangementService : WriterPostManangementService ){}
ngOnInit(): void { 
  this.writerPostManangementService.getBlogs().subscribe((response: any)=>{
    this.writerPostManangementService.addAllBlogs(response.data)
  })
}
}
