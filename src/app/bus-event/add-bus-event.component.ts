import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../ext/uploader.service';
import { MessageService } from '../ext/message.service';

@Component({
  selector: 'app-add-bus-event',
  templateUrl: './add-bus-event.component.html',
  styleUrls: ['./add-bus-event.component.css']
})
export class AddBusEventComponent implements OnInit {
  fileResult: server.weUIUploadFileResult;

  constructor(private uploaderService: UploaderService, private messenger: MessageService) { }

  ngOnInit() {
  }

  selectFile(file: File) {
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          this.messenger.add(msg);
          if (msg.indexOf('was completely uploaded!') > -1
            && this.uploaderService.result != null
            && this.uploaderService.result.length > 0)
            this.fileResult = this.uploaderService.result[0];
        }
      );
    }
  }
}
