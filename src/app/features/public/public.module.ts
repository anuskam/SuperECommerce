import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginModule } from './login/login.module';
import { SigninModule } from './signin/signin.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicRoutingModule, LoginModule, SigninModule],
})
export class PublicModule {}
