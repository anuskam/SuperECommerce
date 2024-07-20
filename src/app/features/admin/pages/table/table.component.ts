import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserDTO } from '../../../../core/models/dto/user-dto';
import { ProductDTO } from '../../../../core/models/dto/product-dto';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columnHeaders: string[] = [];
  @Input() dataSource: UserDTO[] | ProductDTO[] = [];
  @Input() imageColumns: string[] = [];
  public displayedColumns: string[] = [];
  matDataSource = new MatTableDataSource<UserDTO | ProductDTO>();

  ngOnInit(): void {
    this.displayedColumns = this.columnHeaders;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.matDataSource.data = this.dataSource;
    }
  }
}
