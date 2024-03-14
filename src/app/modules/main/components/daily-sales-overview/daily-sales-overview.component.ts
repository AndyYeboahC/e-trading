import { Component, OnInit } from "@angular/core";
import { IMonthlySales, ReportsService } from "../../services/reports.service";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-daily-sales-overview",
  templateUrl: "./daily-sales-overview.component.html",
  styleUrls: ["./daily-sales-overview.component.scss"],
})
export class DailySalesOverviewComponent implements OnInit {
  lastUpdatedDate!: EpochTimeStamp;
  dailySalesDeltaPercent: number = 0;
  monthlySales: IMonthlySales[] = [];

  chart: any = new Chart({
    chart: {
      type: "line",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      categories: ["200", "400", "600"],
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        data: [300, 350, 500],
      } as any,
    ],
  });

  constructor(private reportsService: ReportsService) {
    this.reportsService.getDailySalesOverview().subscribe((result) => {
      this.lastUpdatedDate = result.lastUpdatedDate;
      this.dailySalesDeltaPercent = result.dailySalesDeltaPercent;
      this.monthlySales = result.monthlySales;
      console.log("getDailySalesOverview", result);
    });
  }
  ngOnInit(): void {
    this.chart.series[0].data = [300, 500];
  }

  get deltaDetails(): string {
    if (this.dailySalesDeltaPercent > 0) {
      return `(+${this.dailySalesDeltaPercent}%) increase in today sales.`;
    } else if (this.dailySalesDeltaPercent < 0) {
      return `(${this.dailySalesDeltaPercent}%) decrease in today sales.`;
    } else {
      return "No changes.";
    }
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
