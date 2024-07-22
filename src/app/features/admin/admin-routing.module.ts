import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
    children: [
      {
        path: 'createUser',
        component: CreateUserComponent,
      },
      {
        path: 'editUser',
        component: EditUserComponent,
      },
      {
        path: 'showUsers',
        component: ShowUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
