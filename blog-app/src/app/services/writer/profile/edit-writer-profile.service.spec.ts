import { TestBed } from '@angular/core/testing';

import { EditWriterProfileService } from './edit-writer-profile.service';

describe('EditWriterProfileService', () => {
  let service: EditWriterProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditWriterProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
