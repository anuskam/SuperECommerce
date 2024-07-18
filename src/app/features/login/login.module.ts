import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    AdminModule,
  ],
})
export class LoginModule {}
