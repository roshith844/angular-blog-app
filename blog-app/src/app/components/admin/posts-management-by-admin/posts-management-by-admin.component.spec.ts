import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsManagementByAdminComponent } from './posts-management-by-admin.component';

describe('PostsManagementByAdminComponent', () => {
  let component: PostsManagementByAdminComponent;
  let fixture: ComponentFixture<PostsManagementByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsManagementByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsManagementByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
