import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSheetEditorComponent } from './ngx-sheet-editor.component';



@NgModule({
  declarations: [
    NgxSheetEditorComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgxSheetEditorComponent
  ]
})
export class NgxSheetEditorModule { }
