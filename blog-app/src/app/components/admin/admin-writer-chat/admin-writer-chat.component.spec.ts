import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWriterChatComponent } from './admin-writer-chat.component';

describe('AdminWriterChatComponent', () => {
  let component: AdminWriterChatComponent;
  let fixture: ComponentFixture<AdminWriterChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWriterChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWriterChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
