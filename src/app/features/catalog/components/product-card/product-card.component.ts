import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../core/models/view-models/iproduct';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{

  @Input() dataProduct!: IProduct;

  ngOnInit(): void {
    console.log(this.dataProduct)
  }

  onImageError(event: ErrorEvent) {
    const errorImage = environment.errorImage;
    (event.target as HTMLImageElement).src = errorImage;
  }
}
