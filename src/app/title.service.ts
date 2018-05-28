import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title: string;
  private Source = new Subject<string>();
  public Status$ = this.Source.asObservable();

  constructor() { }

  public setTitle(t: string) {
    this.title = t;
    this.Source.next(this.title);
  }
}
