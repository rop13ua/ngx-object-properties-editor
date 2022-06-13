import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-bool-printer',
  templateUrl: './bool-printer.component.html',
  styleUrls: ['./bool-printer.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class BoolPrinterComponent implements OnInit {
@Input() form_elem: any

  constructor(private parentF: FormGroupDirective) { }

  childForm: any;
  
  ngOnInit(): void {
    this.childForm = this.parentF.form;
  }
  
}
