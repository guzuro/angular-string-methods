import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {
  @Input() inputString:string = "";
  start:number = 0;
  end:number = 0;
  constructor() { }

  get outputString():string{
    return this.inputString.slice(this.start, this.end);
    }

}
