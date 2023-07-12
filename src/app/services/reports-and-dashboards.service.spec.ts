import { TestBed } from '@angular/core/testing';

import { ReportsAndDashboardsService } from './reports-and-dashboards.service';

describe('ReportsAndDashboardsService', () => {
  let service: ReportsAndDashboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsAndDashboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
