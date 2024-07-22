import { Component, inject, OnInit } from '@angular/core';
import { UserDTO } from '../../../../core/models/dto/user-dto';
import { ProductDTO } from '../../../../core/models/dto/product-dto';
import { ApiConectionService } from '../../../../core/services/api-conection/api-conection.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent implements OnInit {
  public columnHeaders: string[] = [];
  public arrayResponse: UserDTO[] | ProductDTO[] = [];
  public imageColumns: string[] = [];
  private apiService = inject(ApiConectionService);
  // public users: UserDTO[] = [];
  // public products: ProductDTO[] = [];
  // public imageColumns: string[] = ['avatar'];
  // private usersService = inject(ApiConectionService);

  ngOnInit(): void {
    this.getUsers();
    // this.getProducts();
  }

  getUsers() {
    this.columnHeaders = ['id', 'name', 'email', 'role', 'avatar'];
    this.imageColumns = ['avatar'];
    this.apiService.setEndpoint('users');
    this.apiService.getList(0, 0).subscribe((data: UserDTO[]) => {
      this.arrayResponse = data;
    });
  }

  getProducts() {
    this.columnHeaders = ['title', 'price', 'description', 'id', 'images'];
    this.imageColumns = ['images'];
    this.apiService.setEndpoint('products');
    this.apiService.getList(0, 0).subscribe((data: ProductDTO[]) => {
      this.arrayResponse = data;
      console.log(this.arrayResponse);
    });
  }
}
