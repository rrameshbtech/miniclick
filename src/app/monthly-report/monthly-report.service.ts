import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Player } from '../models/player.model';
import { SearchResult } from '../models/search-result.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MonthlyReportService {

  baseUrl:string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.playersApi;
   }

getMonthlyReport(query?: any
    , sort: string = 'userName'
    , order: string = 'asc'
    , page: number = 0
    , pageSize: number = 30): Observable<SearchResult<Player>> {
    let queryParams = new HttpParams();

    if(query){
      for (const field in query) {
        if (query.hasOwnProperty(field)) {
          queryParams = queryParams.append(field, query[field]);
        }
      }
    }

    queryParams = queryParams.append('sort', sort)
      .set('direction', order)
      .set('page', page.toString())
      .set('pagesize', pageSize.toString());

    return this.http
      .get<SearchResult<Player>>(this.baseUrl, { params: queryParams });
  }
}
