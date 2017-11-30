import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-cell',
  templateUrl: './mini-cell.component.html',
  styleUrls: ['./mini-cell.component.css'],
  host:{
    class: 'mini-cell'
  }
})
export class MiniCellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
