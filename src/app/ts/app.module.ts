import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import {ContactComponent} from "./contacts/contact.component";
import {ContactListComponent} from "./contacts/contact-list.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContactComponent, ContactListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
