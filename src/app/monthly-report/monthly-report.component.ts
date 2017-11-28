import { Component, OnInit } from '@angular/core';
import { MonthlyReportService } from './monthly-report.service';

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
      .getReport()
      .subscribe((report) => {
        this.monthlyReport = report;
      });
  }

}
