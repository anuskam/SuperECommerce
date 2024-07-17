import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';

@NgModule({
  declarations: [LoadingOverlayComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [LoadingOverlayComponent],
})
export class CoreModule {}
