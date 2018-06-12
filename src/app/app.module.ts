import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JbNavComponent } from './jb-nav/jb-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatRadioGroup } from '@angular/material';
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

@NgModule({
  declarations: [
    AppComponent,
    JbNavComponent,
    IndexComponent,
    WxauthComponent,
    JbtableComponent,
    SoftVerPipe,
    TimelineComponent,
    DispatchComponent
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
    NgxChronologyModule
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
