import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniGridComponent } from './mini-grid.component';
import { MiniColumnDirective } from './mini-column/mini-column.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MiniGridComponent,
    MiniColumnDirective
  ],
  exports: [
    MiniGridComponent
  ]
})
export class MiniGridModule { }
