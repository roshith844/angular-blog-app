import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterAdminChatComponent } from './writer-admin-chat.component';

describe('WriterAdminChatComponent', () => {
  let component: WriterAdminChatComponent;
  let fixture: ComponentFixture<WriterAdminChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterAdminChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterAdminChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
