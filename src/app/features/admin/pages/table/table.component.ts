import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { UserDTO } from '../../../../core/models/dto/user-dto';
import { ProductDTO } from '../../../../core/models/dto/product-dto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
// export class TableComponent {
  @Input() columnHeaders: string[] = [];
  @Input() dataSource: UserDTO[] | ProductDTO[] = [];
  @Input() imageColumns: string[] = [];
  public displayedColumns: string[] = [];
  matDataSource = new MatTableDataSource<UserDTO | ProductDTO>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.displayedColumns = this.columnHeaders;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayedColumns = this.columnHeaders;
    if (changes['dataSource']) {
      this.matDataSource.data = this.dataSource;
    }
  }

  ngAfterViewInit() {
    this.matDataSource.paginator = this.paginator;
    this.matDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matDataSource.filter = filterValue.trim().toLowerCase();

    if (this.matDataSource.paginator) {
      this.matDataSource.paginator.firstPage();
    }
  }
}