import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardoutingModule } from './dashboard.routing';

@NgModule({
  imports: [CommonModule, DashboardoutingModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
