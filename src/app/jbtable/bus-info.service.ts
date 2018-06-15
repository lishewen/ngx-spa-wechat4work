import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { RestDataSource } from '../auth/rest-data-source';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { models } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BusInfoService {
  baseUrl: string;

  constructor(private http: HttpClient, private rest: RestDataSource) {
    this.baseUrl = "https://wx.wzjbbus.com/";
  }

  getBusInfo(): Observable<models.busInfo[]> {
    return this.http.get(this.baseUrl + 'api/businfo', {
      headers: {
        'x-userticket': this.rest.UserTicket
      }
    }).pipe(
      map((res: models.busInfo[]) => {
        return res;
      })
    );
  }
}
