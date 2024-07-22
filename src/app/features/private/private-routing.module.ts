import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'admin-panel',
        loadChildren: () =>
          import('./admin/admin.module').then(module => module.AdminModule),
      },
      {
        path: 'catalogue',
        loadChildren: () =>
          import('./catalog/catalog.module').then(
            module => module.CatalogModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
