import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentManagementByAdminComponent } from './comment-management-by-admin.component';

describe('CommentManagementByAdminComponent', () => {
  let component: CommentManagementByAdminComponent;
  let fixture: ComponentFixture<CommentManagementByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentManagementByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentManagementByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
