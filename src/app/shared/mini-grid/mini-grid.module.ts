import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniGridComponent } from './mini-grid.component';
import { MiniRowDirective } from './mini-row/mini-row.directive';
import { MiniHeaderRowDirective } from './mini-header-row/mini-header-row.directive';
import { MiniCellComponent } from './mini-cell/mini-cell.component';
import { MiniHeaderCellComponent } from './mini-header-cell/mini-header-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MiniGridComponent,
    MiniRowDirective,
    MiniHeaderRowDirective,
    MiniCellComponent,
    MiniHeaderCellComponent
  ],
  exports: [
    MiniGridComponent,
    MiniRowDirective,
    MiniHeaderRowDirective,
    MiniCellComponent,
    MiniHeaderCellComponent
  ]
})
export class MiniGridModule { }
