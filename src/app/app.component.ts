import { Component, OnInit } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private t: TitleService) { }

  ngOnInit(): void {
    this.getTitle();
  }

  public getTitle() {
    this.t.Status$.subscribe(res => this.title = res);
  }
}
