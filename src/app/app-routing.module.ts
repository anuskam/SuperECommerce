import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnaErrorPageComponent } from 'anna-error-page-input';
import { LandingPageComponent } from './features/landing-page/pages/landing-page.component';
import { adminGuard } from './core/guards/admin.guard';
import { customerGuard } from './core/guards/customer.guard';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing-page' },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'catalogue',
    canMatch: [customerGuard],
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/catalog/catalog.module').then(p => p.CatalogModule),
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
