import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin.component';
import { AngularMaterialsModule } from '../../../shared/utils/angular-materials/angular-materials.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
  ],
})
export class SigninModule {}
