import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-upper-case',
  templateUrl: './to-upper-case.component.html',
  styleUrls: ['./to-upper-case.component.css']
})
export class ToUpperCaseComponent {
  @Input() inputString:string = "";

  constructor() { }

  get outputString():string{
    return this.inputString.toUpperCase();
  }

}
