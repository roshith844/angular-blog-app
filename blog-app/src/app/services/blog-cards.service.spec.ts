import { TestBed } from '@angular/core/testing';

import { BlogCardsService } from './blog-cards.service';

describe('BlogCardsService', () => {
  let service: BlogCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
