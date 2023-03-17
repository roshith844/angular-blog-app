import { TestBed } from '@angular/core/testing';

import { WriterAuthGuard } from './writer-auth.guard';

describe('WriterAuthGuard', () => {
  let guard: WriterAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WriterAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
