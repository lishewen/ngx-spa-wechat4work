import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../ext/uploader.service';
import { MessageService } from '../ext/message.service';
import { TitleService } from '../ext/title.service';
import { BusEventService } from './bus-event.service';
import { server } from '../models';
import { RestDataSource } from '../auth/rest-data-source';

@Component({
  selector: 'app-add-bus-event',
  templateUrl: './add-bus-event.component.html',
  styleUrls: ['./add-bus-event.component.css']
})
export class AddBusEventComponent implements OnInit {
  title = '安全事故上报';
  fileResult: server.weUIUploadFileResult;
  model: server.busEvent;

  constructor(private t: TitleService,
    private uploaderService: UploaderService,
    private messenger: MessageService,
    private service: BusEventService,
    private rest: RestDataSource) {
    t.setTitle(this.title);

    this.model = new Object() as server.busEvent;
  }

  ngOnInit() {
  }

  newBusEvent() {
    this.service.postBusEvent(this.model).subscribe(res => {
      if (res.ok)
        this.messenger.add('提交成功！');
    });
  }

  getUserName() {
    if (this.rest.userDetail == null)
      this.rest.getUserDetail().subscribe(data => {
        this.rest.userDetail = data;
        this.model.writer = data.name;
      });
    else
      this.model.writer = this.rest.userDetail.name;
  }

  selectFile(file: File) {
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          this.messenger.add(msg);
          if (msg.indexOf('was completely uploaded!') > -1
            && this.uploaderService.result != null
            && this.uploaderService.result.length > 0) {
            this.fileResult = this.uploaderService.result[0];
            this.model.img = this.fileResult.path;
          }
        }
      );
    }
  }
}
