import { Component, OnInit } from '@angular/core';
import { IDashboardOverview, ReportsService } from '../../services/reports.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent {

  dashboardOverview!: Observable<IDashboardOverview[]>;

  constructor(
    private reportsService: ReportsService
  ) {
    this.dashboardOverview = this.reportsService.getDashboardOverview();
  }
}
