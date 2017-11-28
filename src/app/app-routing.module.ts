import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyReportComponent } from './monthly-report/monthly-report.component'
const routes: Routes = [
  { path: '**', pathMatch: 'full', component: MonthlyReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
