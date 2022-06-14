import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-bool-printer',
  templateUrl: './bool-printer.component.html',
  styleUrls: ['./bool-printer.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class BoolPrinterComponent implements OnInit {
@Input() form_elem: string | undefined

  constructor(private formGroupDirective: FormGroupDirective) { }
  public formControl:  FormControl = new FormControl();
  
  ngOnInit(): void {
    if(this.form_elem != undefined){
      this.formControl = this.formGroupDirective.form.get(this.form_elem) as FormControl;
    }
  }
  
}
