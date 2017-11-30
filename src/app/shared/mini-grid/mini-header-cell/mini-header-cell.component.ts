import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-header-cell',
  templateUrl: './mini-header-cell.component.html',
  styleUrls: ['./mini-header-cell.component.css'],
  host: {
    class: 'mini-header-cell'
  }
})
export class MiniHeaderCellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
