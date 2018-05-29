import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { WxauthComponent } from './wxauth/wxauth.component';
import { JbtableComponent } from './jbtable/jbtable.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'wxauth', component: WxauthComponent },
  { path: 'table', component: JbtableComponent, canActivate: [AuthGuard] }
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
