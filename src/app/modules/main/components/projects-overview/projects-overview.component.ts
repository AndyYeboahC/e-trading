import { Component } from "@angular/core";
import {
  IProjectOverview,
  ReportsService,
} from "../../services/reports.service";

@Component({
  selector: "app-projects-overview",
  templateUrl: "./projects-overview.component.html",
  styleUrls: ["./projects-overview.component.scss"],
})
export class ProjectsOverviewComponent {
  projects: IProjectOverview[] = [];
  columnTitles: string[] = ["title", "budget"];

  constructor(private reportsService: ReportsService) {
    this.reportsService.getProjectsOverview().subscribe((result) => {
      this.projects = result;
      console.table(this.projects);
    });
  }
}
