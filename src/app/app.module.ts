import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { LetterInfoComponent } from './letter-info/letter-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    LetterInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
