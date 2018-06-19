import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { MessageService } from '../ext/message.service';

@Component({
  selector: 'app-bus-map',
  templateUrl: './bus-map.component.html',
  styleUrls: ['./bus-map.component.css']
})
export class BusMapComponent implements OnInit {
  title = '公交大地图';
  centerPoint: number[] = [111.279115, 23.476963]
  constructor(private t: TitleService, private msg: MessageService) {
    t.setTitle(this.title);
  }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(point => {
        this.centerPoint = [point.coords.longitude, point.coords.latitude];
      }, error => {
        this.msg.add(error.message);
      });
    } else
      this.msg.add('请打开定位');
  }

}
