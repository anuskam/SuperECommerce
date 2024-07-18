import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ApiConectionService } from '../../core/services/api-conection/api-conection.service';
import { SERVICE_CONFIG } from '../../core/services/api-conection/config/api-service-config';
@NgModule({
  declarations: [
    CreateUserComponent,
    RemoveUserComponent,
    EditUserComponent,
    ShowUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
  ],
  exports: [CreateUserComponent],
  providers: [
    ApiConectionService,
    {
      provide: SERVICE_CONFIG,
      useValue: { resourceEndpoint: 'users' },
    },
  ],
})
export class AdminModule {}
