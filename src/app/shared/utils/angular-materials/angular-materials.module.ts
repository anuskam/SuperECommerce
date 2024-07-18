import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//materials
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  providers: [provideAnimationsAsync()],
  exports: [MatMenuModule, MatButtonModule, MatIconModule],
})
export class AngularMaterialsModule {}
