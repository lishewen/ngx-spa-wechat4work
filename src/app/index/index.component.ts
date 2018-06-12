import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { MessageService } from '../ext/message.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = '首页';

  constructor(private t: TitleService, private messenger: MessageService) {
    t.setTitle(this.title);
    messenger.add(this.title);
  }

  ngOnInit() {
  }

}
