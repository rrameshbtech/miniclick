import { Component, OnInit, Input, ContentChildren, AfterContentInit } from '@angular/core';

import { MiniColumnDirective } from './mini-column/mini-column.directive';

@Component({
  selector: 'mini-grid',
  templateUrl: './mini-grid.component.html',
  styleUrls: ['./mini-grid.component.css']
})
export class MiniGridComponent implements OnInit, AfterContentInit {

  @Input() dataSource:any;
  @ContentChildren('[miniColumn]') columns:any;
  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    console.log(this.columns);
  }

}
