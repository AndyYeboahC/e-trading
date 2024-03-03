import { Component } from '@angular/core';
import {  ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent {
  

  constructor(
    private reportsService: ReportsService
  ) {
   
  }
}
