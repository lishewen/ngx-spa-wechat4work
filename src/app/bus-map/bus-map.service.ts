import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server, Json2TS } from '../models';
import { CONFIGURATION } from '../shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BusMapService {
  constructor(private http: HttpClient) { }

  getLineInfo(gprsId: number, direction: number) {
    return this.http.get<server.lineInfo>(CONFIGURATION.baseUrls.server + CONFIGURATION.baseUrls.apiUrl
      + 'ui/GetLineInfo/' + gprsId + '/' + direction);
  }

  getPolyline(amapId: string) {
    return this.http.get<Json2TS.LineJson>(CONFIGURATION.baseUrls.server + 'json/route/' + amapId + '.json');
  }
}
