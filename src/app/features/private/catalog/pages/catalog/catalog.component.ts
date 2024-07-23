import { Component, HostListener, inject, OnInit } from '@angular/core';
import { IProduct } from '../../../../../core/models/view-models/iproduct';
import { ApiConectionService } from '../../../../../core/services/api-conection/api-conection.service';

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
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    this.getProducts();
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 3000);
  }

  getProducts() {
    this.productsService
      .getList(this.limit, this.offset)
      .subscribe((params: IProduct[]) => {
        if (this.offset === 0) this.arrProductsResponse = params;
        else params.forEach(product => this.arrProductsResponse.push(product));
        this.onLoad();
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max) {
      this.offset += 10;
      this.getProducts();
    }
  }
}
