import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';

@NgModule({
  declarations: [LoadingOverlayComponent],
  imports: [CommonModule, CoreRoutingModule, NgxSkeletonLoaderModule],
  exports: [LoadingOverlayComponent],
})
export class CoreModule {}
