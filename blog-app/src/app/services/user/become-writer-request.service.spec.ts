import { TestBed } from '@angular/core/testing';

import { BecomeWriterRequestService } from './become-writer-request.service';

describe('BecomeWriterRequestService', () => {
  let service: BecomeWriterRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BecomeWriterRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
