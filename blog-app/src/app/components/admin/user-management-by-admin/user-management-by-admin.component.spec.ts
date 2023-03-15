import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementByAdminComponent } from './user-management-by-admin.component';

describe('UserManagementByAdminComponent', () => {
  let component: UserManagementByAdminComponent;
  let fixture: ComponentFixture<UserManagementByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
