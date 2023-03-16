import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorManagementByAdminComponent } from './creator-management-by-admin.component';

describe('CreatorManagementByAdminComponent', () => {
  let component: CreatorManagementByAdminComponent;
  let fixture: ComponentFixture<CreatorManagementByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorManagementByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorManagementByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
