import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniGridComponent } from './mini-grid.component';
import { MiniRowComponent } from './mini-row/mini-row.component';
import { MiniHeaderRowComponent } from './mini-header-row/mini-header-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MiniGridComponent,
    MiniRowComponent,
    MiniHeaderRowComponent
  ],
  exports: [
    MiniGridComponent,
    MiniRowComponent,
    MiniHeaderRowComponent
  ]
})
export class MiniGridModule { }
