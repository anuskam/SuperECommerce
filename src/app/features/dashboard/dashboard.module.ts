import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.modules';
import { SERVICE_CONFIG } from '../../core/services/api-conection/config/api-service-config';
import { ApiConectionService } from '../../core/services/api-conection/api-conection.service';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialsModule
  ],
  providers: [
    ApiConectionService,
    {
      provide: SERVICE_CONFIG,
      useValue: { resourceEndpoint: 'products' },
    },
  ],
  exports: [
    ProductCardComponent
  ]
})
export class DashboardModule { }
