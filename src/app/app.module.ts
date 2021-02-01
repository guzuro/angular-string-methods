import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LenghtComponent } from './lenght/lenght.component';
import { CharAtComponent } from './char-at/char-at.component';
import { ConcatComponent } from './concat/concat.component';
import { IndexOfComponent } from './index-of/index-of.component';
import { ReplaceComponent } from './replace/replace.component';
import { SliceComponent } from './slice/slice.component';
import { SplitComponent } from './split/split.component';
import { ToUpperCaseComponent } from './to-upper-case/to-upper-case.component';
import { ToLowerCaseComponent } from './to-lower-case/to-lower-case.component';
import { TrimComponent } from './trim/trim.component';

@NgModule({
  declarations: [
    AppComponent,
    LenghtComponent,
    CharAtComponent,
    ConcatComponent,
    IndexOfComponent,
    ReplaceComponent,
    SliceComponent,
    SplitComponent,
    ToUpperCaseComponent,
    ToLowerCaseComponent,
    TrimComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
