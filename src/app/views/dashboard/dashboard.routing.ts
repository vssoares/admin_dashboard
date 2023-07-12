import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   // Fallback when no prior route is matched
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
         {
            path: '',
            component: HomeComponent,
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class DashboardRoutingModule {}
