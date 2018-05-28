import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = '首页';

  constructor(private t: TitleService) {
    t.setTitle(this.title);
  }

  ngOnInit() {
  }

}
