import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { JbtableDataSource } from './jbtable-datasource';
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
  dataSource: JbtableDataSource;
  title = '测试表格';

  constructor(private t: TitleService, private service: BusInfoService, private changeDetectorRefs: ChangeDetectorRef) {
    t.setTitle(this.title);
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'sBusNo'];

  ngOnInit() {
    this.service.getBusInfo().subscribe(data => {
      this.dataSource = new JbtableDataSource(data, this.paginator, this.sort);
      this.changeDetectorRefs.detectChanges();
    });
  }
}
