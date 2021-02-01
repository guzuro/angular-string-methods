import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent {
  
  concat_string:string = "";
  @Input() inputString: string = ""
  
  constructor() { }

  get outputString():string{
    return this.inputString.concat(this.concat_string);
  }
}
