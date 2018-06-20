import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { models } from '../models';
import { SignalRService } from '../ext/signal-r.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'Chat'
  currentMessage: models.ChatMessage;
  allMessages: models.ChatMessage[];
  canSendMessage: boolean;

  constructor(private t: TitleService, private signalRService: SignalRService) {
    t.setTitle(this.title);
    this.subscribeToEvents();
    this.currentMessage = new Object as models.ChatMessage;
    this.allMessages = [];
  }

  sendMessage() {
    if (this.canSendMessage) {
      this.currentMessage.sent = new Date();
      this.signalRService.sendChatMessage(this.currentMessage);
    }
  }

  private subscribeToEvents(): void {
    this.signalRService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    this.signalRService.messageReceived.subscribe((message: models.ChatMessage) => {
      this.currentMessage = new Object as models.ChatMessage;
      this.allMessages.push(message);
    });
  }

  ngOnInit() {
  }

}
