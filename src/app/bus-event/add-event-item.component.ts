import { Component, OnInit } from '@angular/core';
import { BusEventService } from './bus-event.service';
import { MessageService } from '../ext/message.service';
import { UploaderService } from '../ext/uploader.service';
import { TitleService } from '../ext/title.service';
import { server } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { RestDataSource } from '../auth/rest-data-source';

@Component({
  selector: 'app-add-event-item',
  templateUrl: './add-event-item.component.html',
  styleUrls: ['./add-event-item.component.css']
})
export class AddEventItemComponent implements OnInit {
  title = '后续跟进';
  fileResult: server.weUIUploadFileResult;
  model: server.eventItem;

  constructor(private t: TitleService,
    private uploaderService: UploaderService,
    private messenger: MessageService,
    private service: BusEventService,
    private route: ActivatedRoute,
    private router: Router,
    private rest: RestDataSource) {
    t.setTitle(this.title);

    this.model = new Object() as server.eventItem;
  }

  ngOnInit() {
  }

  newEventItem() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.putEventItem(id, this.model).subscribe(res => {
      if (res.ok) {
        this.messenger.add('后续跟进，提交成功！');
        this.router.navigateByUrl('/timeline/' + id);
      }
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
