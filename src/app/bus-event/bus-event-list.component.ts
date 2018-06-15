import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { BusEventService } from './bus-event.service';
import { server } from '../models';

@Component({
  selector: 'app-bus-event-list',
  templateUrl: './bus-event-list.component.html',
  styleUrls: ['./bus-event-list.component.css']
})
export class BusEventListComponent implements OnInit {
  title = '安全事件';
  list: server.busEvent[] = [];

  constructor(private t: TitleService, private service: BusEventService) {
    t.setTitle(this.title);
  }

  ngOnInit() {
    this.service.getBusEvent().subscribe(data => {
      this.list = data;
    });
  }

}
