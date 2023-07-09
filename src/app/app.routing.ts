import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
   // Fallback when no prior route is matched
   {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
   },
   {
      path: 'auth',
      loadChildren: () =>
         import('./views/auth/auth.module').then(m => m.AuthModule),
   },
   {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () =>
         import('./views/dashboard/dashboard.module').then(
            m => m.DashboardModule
         ),
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
