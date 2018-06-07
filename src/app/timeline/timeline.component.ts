import { Component, OnInit } from '@angular/core';
import { IChronologyEvent } from 'ngx-chronology';
import { TitleService } from '../ext/title.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  title: string = '时间线组件';
  events: Array<IChronologyEvent> = [
    {
      title: 'Customization',
      icon: 'check-circle',
      faLibrary: 'far',
      content: `Each area can customize title, icon, faLibrary and content. For more information see the configuration page.`,
    },
    {
      title: 'Icons',
      icon: 'clock',
      faLibrary: 'far',
      content: `Icons are selected from font awesome 5 icons all that is needed is the part after fa- on their website.
          There is a default icon if no property is provided. This is demonstrated with the next "event".`,
    },
    {
      title: 'Event structure (Default Icon)',
      content: `Events are structured into three parts, A title, A icon, and the content that is displayed when expanding the event.`,
    },
    {
      title: 'Mobile responsive',
      icon: 'mobile-alt',
      faLibrary: 'fas',
      content: `The component should be mobile ready shrinking the event content areas first.
          Then moving all events to one side on small screens.`,
    },
  ];
  constructor(private t: TitleService) {
    t.setTitle(this.title);
  }

  ngOnInit() {
  }

}
