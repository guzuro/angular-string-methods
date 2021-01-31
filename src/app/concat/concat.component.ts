import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {
  
  _outputString:string = " ";
  
  @Input()
  set outputString(inputString: string){
    this._outputString = inputString.concat(this.concat_string);
  }

  get outputString():string{
    return this._outputString;
  }
  
  concat_string:string = "";
  constructor() { }

  ngOnInit(): void {
  }


}
