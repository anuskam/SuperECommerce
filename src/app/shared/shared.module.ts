import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoBackDirective } from './directives/go-back.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialsModule } from './utils/angular-materials/angular-materials.module';
import { RouterModule } from '@angular/router';

//pipes
import { UrlImageFormatPipe } from './pipes/url-image-format.pipe';
import { ImageErrorUrlPipe } from './pipes/image-error-url.pipe';
import { RouterLink } from '@angular/router';
import { LoggoutDirective } from './directives/loggout.directive';

@NgModule({
  declarations: [
    GoBackDirective,
    UrlImageFormatPipe,
    HeaderComponent,
    FooterComponent,
    ImageErrorUrlPipe,
    LoggoutDirective,
  ],
  imports: [CommonModule, AngularMaterialsModule, RouterLink, RouterModule],
  exports: [GoBackDirective, UrlImageFormatPipe, HeaderComponent, ImageErrorUrlPipe],
})
export class SharedModule {}
