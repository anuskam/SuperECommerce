import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlImageFormatPipe } from './pipes/url-image-format.pipe';
import { GoBackDirective } from './directives/go-back.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [GoBackDirective, UrlImageFormatPipe, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [GoBackDirective, UrlImageFormatPipe],
})
export class SharedModule {}
