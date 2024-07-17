import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  exports: []
})
export class AngularMaterialsModule { }
