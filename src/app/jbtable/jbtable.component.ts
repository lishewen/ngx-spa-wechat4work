import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { JbtableDataSource } from './jbtable-datasource';
import { TitleService } from '../ext/title.service';

@Component({
  selector: 'jbtable',
  templateUrl: './jbtable.component.html',
  styleUrls: ['./jbtable.component.css']
})
export class JbtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: JbtableDataSource;
  title = '测试表格';

  constructor(private t: TitleService) {
    t.setTitle(this.title);
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new JbtableDataSource(this.paginator, this.sort);
  }
}
