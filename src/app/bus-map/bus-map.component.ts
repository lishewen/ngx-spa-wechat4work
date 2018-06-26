import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { MessageService } from '../ext/message.service';
import gcoord from 'gcoord';
import { server } from '../models';
import { BusMapService } from './bus-map.service';

@Component({
  selector: 'app-bus-map',
  templateUrl: './bus-map.component.html',
  styleUrls: ['./bus-map.component.css']
})
export class BusMapComponent implements OnInit {
  title = '公交大地图';
  centerPoint: number[] = [111.279115, 23.476963];
  gprsId = 260;
  direction = '0';
  line: server.lineInfo;
  lineArr: number[] = [];

  constructor(private t: TitleService, private msg: MessageService, private busmap: BusMapService) {
    t.setTitle(this.title);
    this.centerPoint = gcoord.transform(this.centerPoint, gcoord.WGS84, gcoord.AMap);
  }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(point => {
        //this.centerPoint = [point.coords.longitude, point.coords.latitude];
        this.centerPoint = gcoord.transform([point.coords.longitude, point.coords.latitude], gcoord.WGS84, gcoord.AMap);
      }, error => {
        this.msg.add(error.message);
      });
    } else
      this.msg.add('请打开定位');
  }

  lineQuery() {
    this.busmap.getLineInfo(this.gprsId, +this.direction).subscribe(l => {
      this.line = l;
      this.busmap.getPolyline(l.amapId).subscribe(json => {
        this.lineArr = [];
        json.buslines[0].polyline.split(',').forEach((v) => {
          this.lineArr.push(+v);
        });
      });
    });
  }
}
