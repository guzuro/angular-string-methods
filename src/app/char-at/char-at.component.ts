import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-at',
  templateUrl: './char-at.component.html',
  styleUrls: ['./char-at.component.css']
})
export class CharAtComponent {
  @Input() inputString: string = "";
  index:number = 0;
  constructor() { }

  get charByIndex():string{
    return this.inputString.charAt(this.index);
  }

}
