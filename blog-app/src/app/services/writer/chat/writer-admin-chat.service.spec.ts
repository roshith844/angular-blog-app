import { TestBed } from '@angular/core/testing';

import { WriterAdminChatService } from './writer-admin-chat.service';

describe('WriterAdminChatService', () => {
  let service: WriterAdminChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriterAdminChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
