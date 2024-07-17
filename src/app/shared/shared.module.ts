import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlImageFormatPipe } from './pipes/url-image-format.pipe';
import { GoBackDirective } from './directives/go-back.directive';
@NgModule({
  declarations: [GoBackDirective, UrlImageFormatPipe],
  imports: [CommonModule],
  exports: [GoBackDirective, UrlImageFormatPipe],
})
export class SharedModule {}
