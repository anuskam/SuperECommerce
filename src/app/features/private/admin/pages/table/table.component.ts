import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { environment } from '../../../../../../environments/environment.development';
import { ProductDTO } from '../../../../../core/models/dto/product-dto';
import { UserDTO } from '../../../../../core/models/dto/user-dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() columnHeaders: string[] = [];
  @Input() dataSource: UserDTO[] | ProductDTO[] = [];
  @Input() imageColumns: string[] = [];
  public displayedColumns: string[] = [];
  matDataSource = new MatTableDataSource<UserDTO | ProductDTO>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() element: EventEmitter<{ data: UserDTO | ProductDTO, isEdit: boolean }> = new EventEmitter();

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

  onImageError(event: ErrorEvent) {
    const errorImage = environment.errorImage;
    (event.target as HTMLImageElement).src = errorImage;
  }

  editElement(element: UserDTO | ProductDTO) {
    this.element.emit({ data: element, isEdit: true });
  }

  deleteElement(element: UserDTO | ProductDTO) {
    this.element.emit({ data: element, isEdit: false });
  }
}
