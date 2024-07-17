import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnaErrorPageComponent } from 'anna-error-page-input';

const routes: Routes = [
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
