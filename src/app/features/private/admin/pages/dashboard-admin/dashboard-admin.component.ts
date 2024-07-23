import { Component, inject, OnInit } from '@angular/core';
import { ProductDTO } from '../../../../../core/models/dto/product-dto';
import { UserDTO } from '../../../../../core/models/dto/user-dto';
import { ApiConectionService } from '../../../../../core/services/api-conection/api-conection.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent implements OnInit {
  private apiService = inject(ApiConectionService);
  public columnHeaders: string[] = [];
  public arrayResponse: UserDTO[] | ProductDTO[] = [];
  public imageColumns: string[] = [];
  public elementToSendInput!: UserDTO | ProductDTO;

  public user!: UserDTO;

  public showFiller: boolean = false;
  public isEditOption: boolean = false;
  public isUsers: boolean = true;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.isUsers = true;
    this.columnHeaders = ['id', 'name', 'email', 'role', 'avatar', 'edit', 'delete'];
    this.imageColumns = ['avatar'];
    this.apiService.setEndpoint('users');
    this.apiService.getList(0, 0).subscribe((data: UserDTO[]) => {
      this.arrayResponse = data;
    });
  }

  getProducts(): void {
    this.isUsers = false;
    this.columnHeaders = ['title', 'price', 'description', 'id', 'images', 'edit', 'delete'];
    this.imageColumns = ['images'];
    this.apiService.setEndpoint('products');
    this.apiService.getList(0, 0).subscribe((data: ProductDTO[]) => {
      this.arrayResponse = data;
      console.log(this.arrayResponse);
    });
  }

  actionToResolve($event: { data: UserDTO | ProductDTO, isEdit: boolean }): void{
    console.log('soy el padre', $event.data, $event.isEdit)
    if(this.isUsers){
      this.showFiller = true;
      $event.isEdit ? this.isEditOption = true : this.isEditOption = false; 
      this.user = $event.data as UserDTO;
    }
  }

  create(): void{
    this.showFiller = true;
    this.isEditOption = false;
  }

  close_btn(): void{
    this.showFiller = false;
  }
}
