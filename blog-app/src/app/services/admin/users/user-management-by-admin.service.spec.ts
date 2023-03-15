import { TestBed } from '@angular/core/testing';

import { UserManagementByAdminService } from './user-management-by-admin.service';

describe('UserManagementByAdminService', () => {
  let service: UserManagementByAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManagementByAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
