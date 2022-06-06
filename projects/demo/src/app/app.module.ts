import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSheetEditorModule } from 'ngx-sheet-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSheetEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
