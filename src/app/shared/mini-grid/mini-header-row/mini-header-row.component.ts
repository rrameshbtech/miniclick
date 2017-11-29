import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mini-header-row',
  templateUrl: './mini-header-row.component.html',
  styleUrls: ['./mini-header-row.component.css'],
  host:{
    class: 'mini-header-row'
  },
  encapsulation: ViewEncapsulation.None
})
export class MiniHeaderRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
