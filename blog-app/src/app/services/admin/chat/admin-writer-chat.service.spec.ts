import { TestBed } from '@angular/core/testing';

import { AdminWriterChatService } from './admin-writer-chat.service';

describe('AdminWriterChatService', () => {
  let service: AdminWriterChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminWriterChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
