import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TitleService } from '../ext/title.service';
import { BusInfoService } from './bus-info.service';

@Component({
  selector: 'jbtable',
  templateUrl: './jbtable.component.html',
  styleUrls: ['./jbtable.component.css']
})
export class JbtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<models.busInfo>;
  data: models.busInfo[];
  title = 'IC刷卡机状态';

  constructor(private t: TitleService, private service: BusInfoService) {
    t.setTitle(this.title);
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['sBusNo', 'rwSoftVer', 'lastUpdateTime'];

  ngOnInit() {
    this.service.getBusInfo().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource<models.busInfo>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toUpperCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
