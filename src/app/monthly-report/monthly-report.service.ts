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
      game: 'Game 1',
      difficulty: 'Easy',
      score: 200,
      startTime: '2016-11-01',
      endTime: '2016-12-01'
    },
    {
      id: 2,
      userName: 'Test User 02',
      game: 'Game 2',
      difficulty: 'Medium',
      score: 100,
      startTime: '2016-11-01',
      endTime: '2016-12-01'
    },
    {
      id: 3,
      userName: 'Test User 03',
      game: 'Game 3',
      difficulty: 'Easy',
      score: 1200,
      startTime: '2017-11-01',
      endTime: '2017-12-01'
    },
    {
      id: 4,
      userName: 'Test User 04',
      game: 'Game 4',
      difficulty: 'Hard',
      score: 250,
      startTime: '2017-11-01',
      endTime: '2017-12-01'
    }
    ]);
  }
}
