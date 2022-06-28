import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgxObjectPropertiesEditorComponent } from './ngx-object-properties-editor.component';
import { EnumPrinterComponent } from './components/enum-printer/enum-printer.component';
import { BoolPrinterComponent } from './components/bool-printer/bool-printer.component';



@NgModule({
  declarations: [
    NgxObjectPropertiesEditorComponent,
    EnumPrinterComponent,
    BoolPrinterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgxObjectPropertiesEditorComponent
  ],
  providers: [FormGroupDirective]
})
export class NgxObjectPropertiesEditorModule { }
