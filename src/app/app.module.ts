import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MiniGridModule } from './shared/mini-grid/mini-grid.module';

import { MonthlyReportService } from './monthly-report/monthly-report.service';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthlyReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiniGridModule,
    HttpClientModule
  ],
  providers: [MonthlyReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
