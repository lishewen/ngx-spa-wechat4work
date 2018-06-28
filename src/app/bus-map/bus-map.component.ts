import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { MessageService } from '../ext/message.service';
import gcoord from 'gcoord';
import { server, Json2TS } from '../models';
import { BusMapService } from './bus-map.service';
import { IIcon, ILabel } from 'ngx-amap';

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
  lineArr: number[][] = [];
  online: boolean;
  busmarkers: server.busMarker[] = [];
  busicon: IIcon;
  open: boolean = false;

  constructor(private t: TitleService, private msg: MessageService, private busmap: BusMapService) {
    t.setTitle(this.title);
    this.subscribeToEvents();
    this.centerPoint = gcoord.transform(this.centerPoint, gcoord.WGS84, gcoord.AMap);
    this.busicon = {
      size: {
        width: 24,
        height: 12
      },
      imageSize: {
        width: 24,
        height: 12
      },
      image: "/assets/icons/bus_r.png"
    };
  }

  private subscribeToEvents(): void {
    this.busmap.connectionEstablished.subscribe(() => {
      this.online = true;
    });

    this.busmap.pointUpdated.subscribe((bus: server.车辆实时坐标信息) => {
      let bms = this.busmarkers.filter(v => v.onBoardid == bus.onBoardid);
      if (bms == null || bms.length <= 0)
        this.busmarkers.push({
          onBoardid: bus.onBoardid,
          marker: gcoord.transform([bus.经度, bus.纬度], gcoord.WGS84, gcoord.AMap),
          label: {
            offset: {
              x: 0,
              y: -30
            },
            content: bus.onBoardid.toString()
          }
        });
      else
        bms[0].marker = gcoord.transform([bus.经度, bus.纬度], gcoord.WGS84, gcoord.AMap);
    });
  }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(point => {
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
        let polyline: number[][] = [];
        json.buslines[0].polyline.split(';').forEach((v) => {
          let sv = v.split(',');
          polyline.push([+sv[0], +sv[1]]);
        });
        this.lineArr = polyline;
      });
    });

    let line: Json2TS.Line = {
      gprsId: this.gprsId,
      direction: +this.direction
    };
    this.busmap.getLineFromSignalR(line);
  }
}
