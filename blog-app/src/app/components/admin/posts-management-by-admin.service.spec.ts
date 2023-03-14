import { TestBed } from '@angular/core/testing';

import { PostsManagementByAdminService } from './posts-management-by-admin.service';

describe('PostsManagementByAdminService', () => {
  let service: PostsManagementByAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsManagementByAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
