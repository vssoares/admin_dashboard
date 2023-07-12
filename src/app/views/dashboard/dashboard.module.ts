import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
   imports: [
      CommonModule,
      DashboardRoutingModule,
      NavbarComponent,
      SidebarComponent,

      MatDialogModule,
   ],
   declarations: [DashboardComponent],
})
export class DashboardModule {}
