import { Component, inject, OnInit } from '@angular/core';
import { ApiConectionService } from '../../../../core/services/api-conection/api-conection.service';
import { IProduct } from '../../../../core/models/view-models/iproduct';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{

  private productsService = inject(ApiConectionService<IProduct, any>)
  public arrProductsResponse: IProduct[] = [];
  private offset: number = 0;
  private readonly limit: number = 10;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    const response = this.productsService.getList(this.limit, this.offset).subscribe((params: IProduct[]) => {
      this.arrProductsResponse = params;
      console.log(this.arrProductsResponse)
    })
  }
}
