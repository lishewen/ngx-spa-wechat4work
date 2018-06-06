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
  title = 'IC刷卡机状态';

  constructor(private t: TitleService, private service: BusInfoService) {
    t.setTitle(this.title);
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['lineNo', 'sBusNo', 'rwSoftVer', 'lastUpdateTime'];

  ngOnInit() {
    this.service.getBusInfo().subscribe(data => {
      this.dataSource = new MatTableDataSource<models.busInfo>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (d, filter) =>
        d.lineNo.endsWith(filter)
        || d.sBusNo.indexOf(filter) > -1
        || d.rwSoftVer.startsWith(filter)
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toUpperCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
