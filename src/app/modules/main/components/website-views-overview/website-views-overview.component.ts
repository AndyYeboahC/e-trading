import { Component } from '@angular/core';
import { IWebsiteViews, ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-website-views-overview',
  templateUrl: './website-views-overview.component.html',
  styleUrls: ['./website-views-overview.component.scss']
})
export class WebsiteViewsOverviewComponent {

  lastCampaignDate: string = '';
  weeklyWebsiteViews: IWebsiteViews[] = [];

  constructor(
    private reportsService: ReportsService
  ) {
    this.reportsService.getWebsiteViewsOverview().subscribe((result) => {
      this.lastCampaignDate = result.lastCampaignDate;
      this.weeklyWebsiteViews = result.weeklyWebsiteViews;
    })
  }
}
