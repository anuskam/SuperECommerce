import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page.component';
import { AngularMaterialsModule } from '../../../shared/utils/angular-materials/angular-materials.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, AngularMaterialsModule, MarkdownModule],
})
export class LandingPageModule {}
