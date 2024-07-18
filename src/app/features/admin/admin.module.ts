import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    RemoveUserComponent,
    EditUserComponent,
    ShowUsersComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
