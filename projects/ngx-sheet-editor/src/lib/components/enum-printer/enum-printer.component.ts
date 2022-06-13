import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-enum-printer',
  templateUrl: './enum-printer.component.html',
  styleUrls: ['./enum-printer.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class EnumPrinterComponent implements OnInit {
@Input() form_elem: any
@Input() select: any

childForm: any
constructor(private parentF: FormGroupDirective) { }

  names: any;
  values: any;

  ngOnInit(): void {
    this.childForm = this.parentF.form;

    if(this.select != undefined){
      this.names = this.select.slice(this.select.length/2)
      this.values = this.select.slice(0, this.select.length/2)
    }
  }


  isSmall(){
    return (this.select != undefined && this.names.length < 5)
  }

  getEnum(){
    if(this.select != undefined){
      return this.names
    }
    else  {
      return null
    }
  }
  
  getNumericValue(key:any){
    if(this.select != undefined){
      return this.names.indexOf(key)
    }
    return undefined
  }
}
