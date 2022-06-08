import { Component,Input, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ObjectSubproperty } from './model/models';

@Component({
  selector: 'lib-ngx-sheet-editor',
  templateUrl: './ngx-sheet-editor.component.html',
  styleUrls: ['./ngx-sheet-editor.component.css']
})

export class NgxSheetEditorComponent implements OnInit {
  @Input() object: any;

  myObject:any = new Object();
  readonly firstForm : string = "params"
  
  constructor(public fb: FormBuilder) { }

  objectForm = this.fb.group({
    name: ["Formulario Dinámico"],
    params: this.fb.group({})
  });

  getProperties(keys: string[], obj: any, isSubElement?: boolean, lastKey?: string) {   
    
    // Asignamos nombre de propiedad interna en caso de serlo
    var objectSubproperty: ObjectSubproperty = new ObjectSubproperty()
    if(isSubElement && lastKey != undefined){
      objectSubproperty.key = lastKey;
    }

    // Recorremos las propiedades
    keys.forEach(key => {
      var property = obj[key] // Obtener la propiedad por su clave
      
      if (typeof property === "object") { // Si es objeto, recorremos el objeto para extraer las propiedades
        var result : any = this.getProperties(Object.keys(property), property, true, key)
        
        if(result != undefined){
          if(isSubElement && lastKey!=undefined)
            objectSubproperty.value.push({key: result.key, subvalue: result.value})
          else  
            Object.defineProperty(this.myObject, result.key, {value: result.value});
        }

      } else { // Si no, almacenamos la propiedad
        if(isSubElement)
          objectSubproperty.value.push({key: key, subvalue: property})
        else
          Object.defineProperty(this.myObject, key, {value: property});
      }
    })

    if(isSubElement) { return objectSubproperty}
    else {return undefined}
  }

  getForm(keys: string[], obj: any, lastKey: string, lastForm: FormGroup) {
    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        var last = (lastForm.get(lastKey) as FormGroup);
        last.addControl(key,this.fb.group({}));
        this.getForm(Object.keys(property), property, key, last)
      } else {
        (lastForm.get(lastKey) as FormGroup).addControl(key,new FormControl());
      }
    })
  }

  ngOnInit(): void { 
    this.getProperties(Object.keys(this.object), this.object, false) 
    console.log(this.myObject)
    this.getForm(Object.keys(this.object), this.object, this.firstForm, this.objectForm)
    console.log(this.objectForm)
  }

}
