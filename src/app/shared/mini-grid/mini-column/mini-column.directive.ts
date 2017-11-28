import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[miniColumn]'
})
export class MiniColumnDirective {

  @Input('[miniColumn]') columnId: String;

  constructor() { }

}
