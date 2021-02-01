import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-lower-case',
  templateUrl: './to-lower-case.component.html',
  styleUrls: ['./to-lower-case.component.css']
})
export class ToLowerCaseComponent {

  @Input() inputString:string = "";

  constructor() { }

  get outputString():string{
    return this.inputString.toLowerCase();
  }

}
