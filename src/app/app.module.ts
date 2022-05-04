import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { UsdOnlyDirective } from './usd-only.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, UsdOnlyDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ CurrencyPipe, DecimalPipe ],

})
export class AppModule { }
