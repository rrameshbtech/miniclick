import { Component, OnInit, Input, ContentChildren, AfterContentInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    
  }

}
