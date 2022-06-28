import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSheetEditorModule } from 'projects/ngx-sheet-editor/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



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
