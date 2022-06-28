import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxObjectPropertiesEditorModule } from 'projects/ngx-object-properties-editor/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxObjectPropertiesEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
