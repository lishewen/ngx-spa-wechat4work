import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private Source = new Subject<string>();
  public Status$ = this.Source.asObservable();

  constructor() { }

  public setTitle(t: string) {
    this.Source.next(t);
  }
}
