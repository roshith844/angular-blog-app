import { TestBed } from '@angular/core/testing';

import { CreatorManagementByAdminService } from './creator-management-by-admin.service';

describe('CreatorManagementByAdminService', () => {
  let service: CreatorManagementByAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorManagementByAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
