import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { DatePipe } from "./pipes/date.pipe";
import { NumberPipe } from "./pipes/number.pipe";
import { ChartModule } from "angular-highcharts";

@NgModule({
  declarations: [DatePipe, NumberPipe],
  imports: [],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    ChartModule,
  ],
})
export class SharedModule {}
