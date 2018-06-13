import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map, tap, last, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {
  //UploadApiUrl = 'https://wx.wzjbbus.com/api/Home/UploadFile';
  UploadApiUrl = 'http://localhost:55552/api/Home/UploadFile';

  result: server.weUIUploadFileResult[];

  constructor(private http: HttpClient, private messenger: MessageService) { }

  upload(file: File) {
    if (!file) { return; }

    // COULD HAVE WRITTEN:
    // return this.http.post('/upload/file', file, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).pipe(

    // Create the request object that POSTs the file to an upload endpoint.
    // The `reportProgress` option tells HttpClient to listen and return
    // XHR progress events.

    const formData = new FormData();
    formData.append('picdata', file);

    const req = new HttpRequest('POST', this.UploadApiUrl, formData, {
      reportProgress: true
    });

    // The `HttpClient.request` API produces a raw event stream
    // which includes start (sent), progress, and response events.
    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap(message => this.showProgress(message)),
      last(), // return last (completed) message to caller
      catchError(this.handleError(file))
    );
  }

  /** Return distinct message for sent, upload progress, & response events */
  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        this.result = event.body as server.weUIUploadFileResult[];
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  /**
  * Returns a function that handles Http upload failures.
  * @param file - File object for file being uploaded
  *
  * When no `UploadInterceptor` and no server,
  * you'll end up here in the error handler.
  */
  private handleError(file: File) {
    const userMessage = `${file.name} upload failed.`;

    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof Error) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      this.messenger.add(`${userMessage} ${message}`);

      // Let app keep running but indicate failure.
      return of(userMessage);
    };
  }

  private showProgress(message: string) {
    this.messenger.add(message);
  }
}
