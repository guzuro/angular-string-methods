import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trim',
  templateUrl: './trim.component.html',
  styleUrls: ['./trim.component.css']
})
export class TrimComponent  {
  @Input() inputString:string = "";
  constructor() { }

  get outputString():string{
    return this.inputString.trim();
  }
}
