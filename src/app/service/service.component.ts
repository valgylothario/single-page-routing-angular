import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  Event,
  NavigationEnd,
  PRIMARY_OUTLET,
  UrlSegmentGroup,
  UrlTree,
  UrlSegment,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { IDataSource } from 'src/assets/data-source';
import { DataSourceService } from './DataSourceService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnDestroy {
  currentRoute: string;
  private sub: Subscription;
  tableData: IDataSource[] = [];

  constructor(private router: Router, private dataSource: DataSourceService) {
    this.currentRoute = '';
    this.sub = router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((val) => {
        console.log(this.getPath(this.getSegment()));
        this.tableData = this.dataSource.getDataByKey(
          this.getPath(this.getSegment())
        );
      });
  }

  getSegment(): UrlSegment[] {
    let tree: UrlTree = this.router.parseUrl(
      this.router.routerState.snapshot.url
    );
    let g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    let s: UrlSegment[] = g.segments;
    return s;
  }
  getPath(urlSegments: UrlSegment[]) {
    return urlSegments.map((urlSegment: UrlSegment) => urlSegment.path);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
