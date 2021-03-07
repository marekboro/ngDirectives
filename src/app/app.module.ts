import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './highlightDirectives/basic-highlight/basic-highlight-directive';
import { BetterHighlightDirective } from './highlightDirectives/better-highlight/better-highlight.directive';
import { EvenBetterHighlightDirective } from './highlightDirectives/even-better-highlight/even-better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    EvenBetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
