import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';
import { CatalogRoutingModule } from './catalog-routing.modules';
import { SERVICE_CONFIG } from '../../core/services/api-conection/config/api-service-config';
import { ApiConectionService } from '../../core/services/api-conection/api-conection.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SharedModule } from '../../shared/shared.module';
import { SkeletonProductCardComponent } from './components/skeleton-product-card/skeleton-product-card.component';

@NgModule({
  declarations: [ProductCardComponent, CatalogComponent, SkeletonProductCardComponent],
  imports: [CommonModule, CatalogRoutingModule, AngularMaterialsModule, SharedModule],
  providers: [
    ApiConectionService,
    {
      provide: SERVICE_CONFIG,
      useValue: { resourceEndpoint: 'products' },
    },
  ],
  exports: [ProductCardComponent, SkeletonProductCardComponent],
})
export class CatalogModule {}
