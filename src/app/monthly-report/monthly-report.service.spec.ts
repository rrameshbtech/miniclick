import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MonthlyReportService } from './monthly-report.service';
import { environment } from '../../environments/environment';

describe('MonthlyReportService', () => {
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MonthlyReportService]
    });

    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([MonthlyReportService], (service: MonthlyReportService) => {
    expect(service).toBeTruthy();
  }));

});
