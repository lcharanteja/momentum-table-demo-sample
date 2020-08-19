import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MomentumTableModule} from "momentum-table";
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
    MomentumTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
