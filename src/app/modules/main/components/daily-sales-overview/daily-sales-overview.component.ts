import { Component } from '@angular/core';
import { IMonthlySales, ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-daily-sales-overview',
  templateUrl: './daily-sales-overview.component.html',
  styleUrls: ['./daily-sales-overview.component.scss']
})
export class DailySalesOverviewComponent {

  lastUpdatedDate!: EpochTimeStamp;
  dailySalesDeltaPercent: number = 0;
  monthlySales: IMonthlySales[] = [];

  constructor(
    private reportsService: ReportsService
  ) {
    this.reportsService.getDailySalesOverview().subscribe((result) => {
      this.lastUpdatedDate = result.lastUpdatedDate;
      this.dailySalesDeltaPercent = result.dailySalesDeltaPercent;
      this.monthlySales = result.monthlySales;
    })
  }

  get deltaDetails(): string {
    if (this.dailySalesDeltaPercent > 0) {
      return `(+${this.dailySalesDeltaPercent}%) increase in today sales.`;
    } else if (this.dailySalesDeltaPercent < 0) {
      return `(${this.dailySalesDeltaPercent}%) decrease in today sales.`;
    } else {
      return 'No changes.';
    }
  }

}
