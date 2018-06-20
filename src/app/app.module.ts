import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAmapModule } from 'ngx-amap';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JbNavComponent } from './jb-nav/jb-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSnackBarModule, MatDividerModule } from '@angular/material';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WxauthComponent } from './wxauth/wxauth.component';
import { RestDataSource } from './auth/rest-data-source';
import { HttpClientModule } from '@angular/common/http';
import { JbtableComponent } from './jbtable/jbtable.component';
import { SoftVerPipe } from './jbtable/soft-ver.pipe';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './timeline/timeline.component';
import { NgxChronologyModule } from 'ngx-chronology';
import { DispatchComponent } from './dispatch/dispatch.component';
import { AddBusEventComponent } from './bus-event/add-bus-event.component';
import { BusEventListComponent } from './bus-event/bus-event-list.component';
import { AddEventItemComponent } from './bus-event/add-event-item.component';
import { BusMapComponent } from './bus-map/bus-map.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    JbNavComponent,
    IndexComponent,
    WxauthComponent,
    JbtableComponent,
    SoftVerPipe,
    TimelineComponent,
    DispatchComponent,
    AddBusEventComponent,
    BusEventListComponent,
    AddEventItemComponent,
    BusMapComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CoreModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    NgxChronologyModule,
    MatSnackBarModule,
    MatListModule,
    MatDividerModule,
    NgxAmapModule.forRoot({ apiKey: 'df3029f8e7e7357793ca78fbe2e1263d' })
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
