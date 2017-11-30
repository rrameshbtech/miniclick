import { Component, OnInit, Input, ContentChild, AfterContentInit, TemplateRef } from '@angular/core';

import { MiniRowDirective } from './mini-row/mini-row.directive';
import { MiniHeaderRowDirective } from './mini-header-row/mini-header-row.directive';

@Component({
  selector: 'mini-grid',
  templateUrl: './mini-grid.component.html',
  styleUrls: ['./mini-grid.component.css'],
  host :{
    class: 'mini-grid'
  }
})
export class MiniGridComponent implements OnInit, AfterContentInit {

  @Input() dataSource:any;
  @Input() theme:string;
  
  @ContentChild(MiniRowDirective, {read: TemplateRef}) rowTemplate;
  @ContentChild(MiniHeaderRowDirective, {read: TemplateRef}) headerRowTemplate;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(){
  }

}
