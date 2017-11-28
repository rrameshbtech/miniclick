import { TestBed, inject } from '@angular/core/testing';

import { MonthlyReportService } from './monthly-report.service';

describe('MonthlyReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthlyReportService]
    });
  });

  it('should be created', inject([MonthlyReportService], (service: MonthlyReportService) => {
    expect(service).toBeTruthy();
  }));
});
