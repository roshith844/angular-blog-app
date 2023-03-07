import { TestBed } from '@angular/core/testing';

import { DeleteBlogService } from './delete-blog.service';

describe('DeleteBlogService', () => {
  let service: DeleteBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
