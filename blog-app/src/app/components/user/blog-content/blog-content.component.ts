import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  data!: {slug: string, title: string, content: string, author: string}
  slug = ''
  constructor(private activatedRoute: ActivatedRoute, private contentService: ContentService) {

  }

  ngOnInit(): void {
    const PARAM = this.activatedRoute.snapshot.paramMap.get('slug')
    if (PARAM != null) {
      this.slug = PARAM
      this.contentService.getBlogContent(PARAM).subscribe((response: any) => {
        console.log(response)
        this.data = response.data
      })
    }




  }
}
