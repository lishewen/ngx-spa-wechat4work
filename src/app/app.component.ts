import { Component, OnInit } from '@angular/core';
import { TitleService } from './ext/title.service';
import { MatSnackBar } from '@angular/material';
import { MessageService } from './ext/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private t: TitleService, private messenger: MessageService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTitle();
    this.messenger.Message.subscribe((msg) => this.openSnackBar(msg));
  }

  public getTitle() {
    this.t.Status$.subscribe(res => this.title = res);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}
