import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page.component';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, AngularMaterialsModule],
})
export class LandingPageModule {}
