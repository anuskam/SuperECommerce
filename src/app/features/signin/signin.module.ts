import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin.component';

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
