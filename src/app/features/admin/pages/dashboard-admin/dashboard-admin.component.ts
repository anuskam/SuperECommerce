import { Component } from '@angular/core';
import { UserDTO } from '../../../../core/models/dto/user-dto';
import { ProductDTO } from '../../../../core/models/dto/product-dto';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  arrayResponse: UserDTO[] | ProductDTO[] = [];
  amountOfColumns: number = 0;
  arrayHeaderNames: string[] = [];
}
