import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login.component';
import { ApiConectionService } from '../../../core/services/api-conection/api-conection.service';
import { SERVICE_CONFIG } from '../../../core/services/api-conection/config/api-service-config';
import { AngularMaterialsModule } from '../../../shared/utils/angular-materials/angular-materials.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiConectionService,
    {
      provide: SERVICE_CONFIG,
      useValue: { resourceEndpoint: 'auth/profile' },
    },
  ],
})
export class LoginModule {}
