import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TitleService } from '../ext/title.service';
import { DispatchService } from './dispatch.service';
import { models } from '../models';

@Component({
  selector: 'dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<models.调度汇总>;
  title = '车辆位置';
  constructor(private t: TitleService, private service: DispatchService) {
    t.setTitle(this.title);
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['onBoardid', 'name', 'lineName', 'stationName', 'updateTime'];

  ngOnInit() {
    this.service.getDispatch().subscribe(data => {
      this.dataSource = new MatTableDataSource<models.调度汇总>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (d, filter) =>
        d.onBoardid.toString().indexOf(filter) > -1
        || d.name.indexOf(filter) > -1
        || d.lineName.indexOf(filter) > -1
        || (d.stationName != null && d.stationName.indexOf(filter) > -1)
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toUpperCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
