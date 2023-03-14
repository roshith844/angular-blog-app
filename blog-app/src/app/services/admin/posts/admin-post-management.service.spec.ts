import { TestBed } from '@angular/core/testing';

import { AdminPostManagementService } from './admin-post-management.service';

describe('AdminPostManagementService', () => {
  let service: AdminPostManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPostManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
