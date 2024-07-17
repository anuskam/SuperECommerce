import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnaErrorPageComponent } from 'anna-error-page-input';
import { LandingPageComponent } from './features/landing-page/pages/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing-page' },
  { path: 'landing-page', component: LandingPageComponent },
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
