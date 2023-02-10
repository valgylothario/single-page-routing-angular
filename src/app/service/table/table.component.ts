import { Component, Input } from '@angular/core';
import { IDataSource } from 'src/assets/data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() tableData: IDataSource[] = [];
}
