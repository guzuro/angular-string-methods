import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent  {
  @Input() inputString:string = "";
  term:string = "";

  constructor() { }

  get outputString():string[]{
    return this.inputString.split(this.term);
  }

}
