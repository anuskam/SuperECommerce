import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ApiConectionService } from '../../../../core/services/api-conection/api-conection.service';
import { IProduct } from '../../../../core/models/view-models/iproduct';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private productsService = inject(ApiConectionService<IProduct, any>);
  public arrProductsResponse: IProduct[] = [];
  private offset: number = 0;
  private readonly limit: number = 10;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService
      .getList(this.limit, this.offset)
      .subscribe((params: IProduct[]) => {
        if(this.offset === 0) this.arrProductsResponse = params;
        else params.forEach(product => this.arrProductsResponse.push(product));
      });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos >= max )   {
      this.offset += 10;
      this.getProducts();
    }
  }
}
