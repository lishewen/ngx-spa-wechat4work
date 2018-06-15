import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestDataSource } from '../auth/rest-data-source';
import { server } from '../models';

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

  getBusEventDetail(id: number) {
    let header = this.rest.Header;
    return this.http.get<server.busEvent>(this.busEventApiUrl + '/' + id, { headers: header });
  }

  putEventItem(id: number, model: server.eventItem) {
    let header = this.rest.Header;
    return this.http.put(this.busEventApiUrl + '/' + id, model, { headers: header, observe: 'response' });
  }
}
