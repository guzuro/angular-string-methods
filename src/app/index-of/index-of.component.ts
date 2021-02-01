import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-of',
  templateUrl: './index-of.component.html',
  styleUrls: ['./index-of.component.css']
})
export class IndexOfComponent {
  @Input() inputString:string = "";

  term:string = "";
  index:number = 0;

  constructor() { }
  
  get outputString():number{
    return this.inputString.indexOf(this.term, this.index);
  }

}
