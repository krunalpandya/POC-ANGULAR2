import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModel Lives Here

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- Import the Forms Module before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
