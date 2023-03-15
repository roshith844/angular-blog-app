import { TestBed } from '@angular/core/testing';

import { AdminCommentManagementService } from './admin-comment-management.service';

describe('AdminCommentManagementService', () => {
  let service: AdminCommentManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCommentManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
