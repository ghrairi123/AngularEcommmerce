import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      {
        path: 'LoginClient',
        loadChildren: () =>
          import('./Views/Client/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'Dashboard',
        loadChildren: () =>
          import(
            './Views/Client/dashboardClient/logindashboard-routing.module'
          ).then((m) => m.LogindashboardRoutingModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./Views/Admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'LoginAdmin',
        loadChildren: () =>
          import('./Views/Admin/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
