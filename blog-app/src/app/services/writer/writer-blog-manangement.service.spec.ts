import { TestBed } from '@angular/core/testing';

import { WriterPostManangementService } from './writer-blog-manangement.service';

describe('WriterPostManangementService', () => {
  let service: WriterPostManangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriterPostManangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
