import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdTooltipModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StTableComponent } from './st-table/st-table.component';
import { StHeaderComponent } from './st-header/st-header.component';
import { StRowComponent } from './st-row/st-row.component';
import { StCellComponent } from './st-cell/st-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    StTableComponent,
    StHeaderComponent,
    StRowComponent,
    StCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
