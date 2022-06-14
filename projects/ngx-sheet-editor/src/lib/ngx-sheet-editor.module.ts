import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgxSheetEditorComponent } from './ngx-sheet-editor.component';
import { EnumPrinterComponent } from './components/enum-printer/enum-printer.component';
import { BoolPrinterComponent } from './components/bool-printer/bool-printer.component';



@NgModule({
  declarations: [
    NgxSheetEditorComponent,
    EnumPrinterComponent,
    BoolPrinterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgxSheetEditorComponent
  ],
  providers: [FormGroupDirective]
})
export class NgxSheetEditorModule { }
