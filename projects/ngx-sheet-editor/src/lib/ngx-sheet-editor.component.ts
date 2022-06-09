import { Component,Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ObjectSubproperty } from './model/models';

@Component({
  selector: 'lib-ngx-sheet-editor',
  templateUrl: './ngx-sheet-editor.component.html',
  styleUrls: ['./ngx-sheet-editor.component.css']
})

export class NgxSheetEditorComponent implements OnInit {
  @Input() object: any;

  myObject:any = new Object();
  mySimpleObject:any = new Object();
  readonly firstForm : string = "params"
  subelements : number = 0

  constructor(public fb: FormBuilder) { }

  objectForm = this.fb.group({
    name: ["Formulario Dinámico"],
    params: this.fb.group({})
  });

  simpleForm: FormGroup = this.fb.group({});

  getArrayOfControls() {
    return (this.objectForm.get('params') as FormArray).controls;
  }

  getControl(control: any){
    return control as FormControl;
  }

  getValue(key: any){
    console.log(this.mySimpleObject[key])
    return this.mySimpleObject[key];
  }

  getComplexProperties(keys: string[], obj: any, isSubElement?: boolean, lastKey?: string) {   
    
    // Asignamos nombre de propiedad interna en caso de serlo
    var objectSubproperty: ObjectSubproperty = new ObjectSubproperty()
    if(isSubElement && lastKey != undefined){
      objectSubproperty.key = lastKey;
    }

    // Recorremos las propiedades
    keys.forEach(key => {
      var property = obj[key] // Obtener la propiedad por su clave
      
      if (typeof property === "object") { // Si es objeto, recorremos el objeto para extraer las propiedades
        var result : any = this.getComplexProperties(Object.keys(property), property, true, key)
        this.subelements = this.subelements + 1;

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

  getComplexForm(keys: string[], obj: any, lastKey: string, lastForm: FormGroup) {
    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        var last = (lastForm.get(lastKey) as FormGroup);
        last.addControl(key,this.fb.group({}));
        this.getComplexForm(Object.keys(property), property, key, last)
      } else {
        (lastForm.get(lastKey) as FormGroup).addControl(key,new FormControl());
      }
    })
  }

  getSimpleForm(keys: string[], obj: any, group: any){
    //debugger;
    
    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        this.getSimpleForm(Object.keys(property), property, group)
      } else {
        group[key] = new FormControl(this.mySimpleObject[key])
      }
    })

    this.simpleForm = this.fb.group(group)
  }

  getType(key: any){
    return typeof this.mySimpleObject[key];
  }

  getElems(){
    return Object.getOwnPropertyNames(this.mySimpleObject)
  }

  getSimpleProperties(keys: string[], obj: any) {   
    
    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        this.getSimpleProperties(Object.keys(property), property)
      } else {
        Object.defineProperty(this.mySimpleObject, key, {value: property});
      }
    })
  }

  loadProperties(){
    this.getComplexProperties(Object.keys(this.object), this.object, false) 
    
    this.getComplexForm(Object.keys(this.object), this.object, this.firstForm, this.objectForm)

    this.getSimpleProperties(Object.keys(this.object), this.object) 
    console.log(this.mySimpleObject)

    var group :{[key: string]: any} = {}
    this.getSimpleForm(Object.keys(this.object), this.object, group)
  }

  ngOnInit(): void { 
    this.loadProperties()
  }

  onSubmit(){
    //do smth
  }

}
