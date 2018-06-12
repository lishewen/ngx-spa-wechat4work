import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private message = new Subject<string>();
  public Message = this.message.asObservable();

  add(message: string) {
    this.message.next(message);
  }
}
