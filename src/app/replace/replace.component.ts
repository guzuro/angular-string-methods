import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.css']
})
export class ReplaceComponent {

  @Input() inputString:string = "";
  term:string = "";
  newTerm:string = "";

  constructor() { }

  get outputString():string {
    return this.inputString.replace(this.term, this.newTerm);
  }

}
