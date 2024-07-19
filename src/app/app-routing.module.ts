import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnaErrorPageComponent } from 'anna-error-page-input';
import { LandingPageComponent } from './features/landing-page/pages/landing-page.component';
import { adminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing-page' },
  { path: 'landing-page', component: LandingPageComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/catalog/catalog.module').then(
        p => p.CatalogModule,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(
        module => module.LoginModule,
      ),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./features/signin/signin-routing.module').then(
        module => module.SigninRoutingModule,
      ),
  },
  {
    path: 'admin-panel',
    canMatch: [adminGuard],
    loadChildren: () =>
      import('./features/admin/admin.module').then(
        module => module.AdminModule,
      ),
  },
  {
    path: '**',
    component: AnnaErrorPageComponent,
    data: { routerLink: '/landing-page' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
