import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-enum-printer',
  templateUrl: './enum-printer.component.html',
  styleUrls: ['./enum-printer.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class EnumPrinterComponent implements OnInit {
@Input() form_elem: string | undefined
@Input() select: string[] | undefined

childForm: any
constructor(private parentF: FormGroupDirective, private cc: ControlContainer) { }

  names: string[] = [];
  small: boolean = false;

  ngOnInit(): void {
    this.childForm = this.parentF.form;

    if(this.select != undefined){
      this.names = this.select.slice(this.select.length/2)
    }
  }

  isSmall(){
    this.small = (this.select != undefined && this.names.length < 5)
    return (this.select != undefined && this.names.length < 5)
  }

  isChecked(value: any){
    var res =this.childForm.get(this.form_elem).value == this.getNumericValue(value)
    console.log(res) 
    return res;
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
