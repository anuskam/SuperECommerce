import { Component, inject, OnInit } from '@angular/core';
import { UserDTO } from '../../../../core/models/dto/user-dto';
import { ProductDTO } from '../../../../core/models/dto/product-dto';
import { ApiConectionService } from '../../../../core/services/api-conection/api-conection.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent implements OnInit {
  /* arrayResponse: UserDTO[] | ProductDTO[] = [];
  amountOfColumns: number = 0;
  arrayHeaderNames: string[] = []; */
  /* private usersService = inject(ApiConectionService);
  public infoUser: UserDTO[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'avatar',
    'actions',
  ];
  dataSource = new MatTableDataSource<UserDTO>();
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getList(15, 0).subscribe((data: UserDTO[]) => {
      console.log('data', data)
      this.dataSource.data = data;
    });
  } */
  public columnHeaders: string[] = [
    'id',
    'title',
    'price',
    'description',
    'categoryid',
    'images',
  ];
  // public columnHeaders: string[] = ['id', 'name', 'email', 'role', 'avatar'];
  public users: UserDTO[] = [];
  public products: ProductDTO[] = [];
  public imageColumns: string[] = ['images'];
  private productsService = inject(ApiConectionService);
  // private usersService = inject(ApiConectionService);
  ngOnInit(): void {
    this.productsService.getList(15, 0).subscribe((data: ProductDTO[]) => {
      this.products = data;
    });
    /* this.usersService.getList(15, 0).subscribe((data: UserDTO[]) => {
      this.users = data;
    }); */
  }
}
