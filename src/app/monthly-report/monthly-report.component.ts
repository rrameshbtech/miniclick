import { Component, OnInit } from '@angular/core';
import { MonthlyReportService } from './monthly-report.service';

import { MiniRowDirective } from '../shared/mini-grid/mini-row/mini-row.directive';

@Component({
  selector: 'mini-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {

  monthlyReport = [];
  constructor(private service: MonthlyReportService) { }

  ngOnInit() {
    this.service
      .getMonthlyReport()
      .subscribe((reportDetails) => {
        this.monthlyReport = reportDetails.data;
      });
  }

}
