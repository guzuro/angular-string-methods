import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-lenght',
templateUrl: './lenght.component.html',
styleUrls: ['./lenght.component.css']
})
export class LenghtComponent implements OnInit {

@Input() inputString: string = "";
constructor() { }

ngOnInit(): void {
}

get stringLengthSpaces():number{
  return this.inputString.length
}
get stringLengthClear():number{
  return this.inputString.replace(/ /g, "").length
}

}
