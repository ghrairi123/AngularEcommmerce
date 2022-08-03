import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogindashboardRoutingModule } from './logindashboard-routing.module';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';


@NgModule({
  declarations: [
    DashboardClientComponent
  ],
  imports: [
    CommonModule,
    LogindashboardRoutingModule
  ]
})
export class LogindashboardModule { }
