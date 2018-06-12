import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {
  dispatchApiUrl = 'https://wx.wzjbbus.com/api/dispatch/';

  constructor(private http:HttpClient) { }

  getDispatch() {
    return this.http.get<Array<models.调度汇总>>(this.dispatchApiUrl);
  }
}
