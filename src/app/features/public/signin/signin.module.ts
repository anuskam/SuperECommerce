import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin.component';
import { AngularMaterialsModule } from '../../../shared/utils/angular-materials/angular-materials.module';
import { ApiConectionService } from '../../../core/services/api-conection/api-conection.service';
import { SERVICE_CONFIG } from '../../../core/services/api-conection/config/api-service-config';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    MarkdownModule,
    SharedModule,
  ],
  providers: [
    ApiConectionService,
    {
      provide: SERVICE_CONFIG,
      useValue: { resourceEndpoint: 'users' },
    },
  ],
})
export class SigninModule {}
