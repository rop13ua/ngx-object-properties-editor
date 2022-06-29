import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-bool-printer',
  templateUrl: './bool-printer.component.html',
  styleUrls: ['./bool-printer.component.css', '../../themes.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class BoolPrinterComponent implements OnInit {
@Input() form_elem: string | undefined
@Output() changed = new EventEmitter<string>();

  constructor(private formGroupDirective: FormGroupDirective) { }
  formControl:  FormControl = new FormControl();
  
  ngOnInit(): void {
    if(this.form_elem != undefined){
      this.formControl = this.formGroupDirective.form.get(this.form_elem) as FormControl;
    }
  }

  onChange() {
    this.changed.emit(this.form_elem);
  }
  
}
