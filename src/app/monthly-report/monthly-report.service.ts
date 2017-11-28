import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MonthlyReportService {

  constructor(private http: HttpClient) { }

  getReport(): Observable<any> {
    return Observable.of([{
      id: 1,
      userName: 'Test User 01',
      score: 200,
      startTime: '2016-11-01',
      endTime: '2016-12-01'
    },
    {
      id: 2,
      userName: 'Test User 02',
      score: 100,
      startTime: '2016-11-01',
      endTime: '2016-12-01'
    },
    {
      id: 3,
      userName: 'Test User 03',
      score: 1200,
      startTime: '2017-11-01',
      endTime: '2017-12-01'
    },
    {
      id: 4,
      userName: 'Test User 04',
      score: 250,
      startTime: '2017-11-01',
      endTime: '2017-12-01'
    }
    ]);
  }
}
