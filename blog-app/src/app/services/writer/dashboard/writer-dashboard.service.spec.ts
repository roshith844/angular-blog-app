import { TestBed } from '@angular/core/testing';

import { WriterDashboardService } from './writer-dashboard.service';

describe('WriterDashboardService', () => {
  let service: WriterDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriterDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
