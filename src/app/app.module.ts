import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LenghtComponent } from './lenght/lenght.component';
import { CharAtComponent } from './char-at/char-at.component';
import { ConcatComponent } from './concat/concat.component';

@NgModule({
  declarations: [
    AppComponent,
    LenghtComponent,
    CharAtComponent,
    ConcatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
