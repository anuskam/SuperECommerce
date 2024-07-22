import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../../shared/utils/angular-materials/angular-materials.module';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { TableComponent } from './pages/table/table.component';
import { ApiConectionService } from '../../../core/services/api-conection/api-conection.service';
import { SERVICE_CONFIG } from '../../../core/services/api-conection/config/api-service-config';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    ShowUsersComponent,
    DashboardAdminComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [CreateUserComponent, TableComponent],
  providers: [
    // ApiConectionService,
    // {
    //   provide: SERVICE_CONFIG,
    //   useValue: { resourceEndpoint: 'users' },
    // },
    ApiConectionService,
    {
      provide: SERVICE_CONFIG,
      useValue: { resourceEndpoint: 'users' },
    },
  ],
})
export class AdminModule {}