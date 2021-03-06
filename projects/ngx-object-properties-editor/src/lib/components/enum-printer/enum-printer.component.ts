import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-enum-printer',
  templateUrl: './enum-printer.component.html',
  styleUrls: ['./enum-printer.component.css', '../../themes.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class EnumPrinterComponent implements OnInit {
  @Input() form_elem: string | undefined
  @Input() select: string[] | undefined
  @Output() changed = new EventEmitter<string>();
  
  private names: string[] = [];
  formControl:  FormControl = new FormControl();

  constructor(private formGroupDirective: FormGroupDirective) { }

  ngOnInit(): void {
    if(this.form_elem){
      this.formControl = this.formGroupDirective.form.get(this.form_elem) as FormControl;
    }

    if(this.select){
      this.names = this.select.slice(this.select.length/2)
    }
  }

  isSmall(){
    return (this.select && this.names.length < 5)
  }

  getEnum(){
    if(this.select){
      return this.names
    }
    else  {
      return null
    }
  }
  
  getNumericValue(key:any){
    if(this.select){
      return this.names.indexOf(key)
    }
    return undefined
  }

  onChange() {
    this.changed.emit(this.form_elem);
  }
}
