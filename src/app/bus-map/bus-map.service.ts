import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server, Json2TS } from '../models';
import { CONFIGURATION } from '../shared/app.constants';
import { Subject } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class BusMapService {
  pointUpdated = new Subject<server.车辆实时坐标信息>();
  connectionEstablished = new Subject<Boolean>();
  private hubConnection: HubConnection;

  constructor(private http: HttpClient) {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  getLineFromSignalR(line: Json2TS.Line) {
    this.hubConnection.invoke('GetLine', line);
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(CONFIGURATION.baseUrls.server + 'buspoints')
      .build();
  }

  private startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Hub connection started');
        this.connectionEstablished.next(true);
      })
      .catch(() => {
        console.log('Error while establishing connection, retrying...');
        setTimeout(this.startConnection(), 5000);
      });
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('PointUpdated', (data: server.车辆实时坐标信息) => {
      this.pointUpdated.next(data);
    });
  }

  getLineInfo(gprsId: number, direction: number) {
    return this.http.get<server.lineInfo>(CONFIGURATION.baseUrls.server + CONFIGURATION.baseUrls.apiUrl
      + 'ui/GetLineInfo/' + gprsId + '/' + direction);
  }

  getPolyline(amapId: string) {
    return this.http.get<Json2TS.LineJson>(CONFIGURATION.baseUrls.server + 'json/route/' + amapId + '.json');
  }
}
