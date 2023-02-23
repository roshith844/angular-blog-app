import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent implements OnInit {
  blogCards: { slug: string, title: string, content: string, author: string }[] = []
  constructor(private contentService: ContentService) { }
  ngOnInit(): void {

    this.contentService.getBlogCardContent().subscribe((response: any) => {
      this.blogCards = response.cards
      console.log(response.cards)
    })
  }

}
