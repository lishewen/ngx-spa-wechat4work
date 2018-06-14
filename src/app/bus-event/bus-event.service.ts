import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestDataSource } from '../auth/rest-data-source';

@Injectable({
  providedIn: 'root'
})
export class BusEventService {
  busEventApiUrl = 'https://wx.wzjbbus.com/api/busevent';

  constructor(private http: HttpClient, private rest: RestDataSource) { }

  postBusEvent(model: server.busEvent) {
    let header = this.rest.Header;
    return this.http.post(this.busEventApiUrl, model, { headers: header, observe: 'response' });
  }

  getBusEvent() {
    let header = this.rest.Header;
    return this.http.get<server.busEvent[]>(this.busEventApiUrl, { headers: header });
  }
}
