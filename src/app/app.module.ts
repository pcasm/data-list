import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { TableComponent } from './table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormatKeysPipe } from './pipes/format-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormatKeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
