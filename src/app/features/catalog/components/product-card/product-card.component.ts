import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../core/models/view-models/iproduct';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent{

  @Input() dataProduct!: IProduct;

  onImageError(event: ErrorEvent) {
    console.log(event.target)
    const errorImage = environment.errorImage;
    (event.target as HTMLImageElement).src = errorImage;
  }
}