import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { ApiConectionService } from '../../../../core/services/api-conection/api-conection.service';
import { IProduct } from '../../../../core/models/view-models/iproduct';
import { LoadService } from '../../../../core/services/load.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit, AfterViewChecked {
  private productsService = inject(ApiConectionService<IProduct, any>);
  public arrProductsResponse: IProduct[] = [];
  public skeletonItems: number[] = Array.from({ length: 8 }, (_, i) => i + 1);
  private offset: number = 0;
  private readonly limit: number = 10;

  isLoading: boolean = false;
  loadService = inject(LoadService);
  private cdRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getProducts();
    this.isLoading = this.loadService.isLoading;
  }

  ngAfterViewChecked(): void {
    if (this.isLoading !== this.loadService.isLoading) {
      this.isLoading = this.loadService.isLoading;
      this.cdRef.detectChanges();
    }
  }

  getProducts() {
    this.productsService
      .getList(this.limit, this.offset)
      .subscribe((params: IProduct[]) => {
        if (this.offset === 0) this.arrProductsResponse = params;
        else params.forEach(product => this.arrProductsResponse.push(product));
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
