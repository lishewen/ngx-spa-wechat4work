import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { WxauthComponent } from './wxauth/wxauth.component';
import { JbtableComponent } from './jbtable/jbtable.component';
import { AuthGuard } from './auth/auth.guard';
import { TimelineComponent } from './timeline/timeline.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { AddBusEventComponent } from './bus-event/add-bus-event.component';
import { BusEventListComponent } from './bus-event/bus-event-list.component';
import { AddEventItemComponent } from './bus-event/add-event-item.component';
import { BusMapComponent } from './bus-map/bus-map.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'wxauth', component: WxauthComponent },
  { path: 'busmap', component: BusMapComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'addbusevent', component: AddBusEventComponent, canActivate: [AuthGuard] },
  { path: 'table', component: JbtableComponent, canActivate: [AuthGuard] },
  { path: 'buseventlist', component: BusEventListComponent, canActivate: [AuthGuard] },
  { path: 'dispatch', component: DispatchComponent, canActivate: [AuthGuard] },
  { path: 'timeline/:id', component: TimelineComponent, canActivate: [AuthGuard] },
  { path: 'addeventitem/:id', component: AddEventItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
