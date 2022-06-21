import { Component,Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ObjectSubproperty } from './model/models';

@Component({
  selector: 'lib-ngx-sheet-editor',
  host: {
		"[class.light-theme]": "( theme === 'light' )",
		"[class.dark-theme]": "( theme === 'dark' )",
    "[class.muret-theme]": "( theme === 'muret' )"
	},
  templateUrl: './ngx-sheet-editor.component.html',
  styleUrls: ['./ngx-sheet-editor.component.css']
})

export class NgxSheetEditorComponent implements OnInit {
  @Input() object: Object | undefined;
  @Input() labels: Map<string, string> | undefined;
  @Input() selects: Map<string,any> | undefined;
  @Input() title: string | undefined;
  @Input() theme: string | undefined;
  //@Output() updatedObject: Object | undefined

  mySimpleObject:any = new Object();
  subelements : number = 0
  simpleForm: FormGroup = this.fb.group({});

  private myObject:any = new Object();
  private readonly firstForm : string = "params"
  private objectForm = this.fb.group({
    name: ["Formulario Dinámico"],
    params: this.fb.group({})
  });
  
  constructor(private fb: FormBuilder) { }

  getType(key: string){
    return typeof this.mySimpleObject[key];
  }

  getElems(){
    return Object.getOwnPropertyNames(this.mySimpleObject)
  }

  getSelect(key: string) {
    if(this.selects != undefined){
      return Object.keys(this.selects.get(key))
    } 
    return undefined 
  }

  isEnum(key: string){
    return (this.selects != undefined && this.selects.get(key) != undefined)
  }

  getLabel(key: string){
    if(this.labels != undefined && this.labels.get(key) != undefined){
      return this.labels.get(key)
    }
    return key
  }

  private getComplexProperties(keys: string[], obj: any, isSubElement?: boolean, lastKey?: string) {   
    
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

  private getComplexForm(keys: string[], obj: any, lastKey: string, lastForm: FormGroup) {
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

  private updateObject(keys: string[], obj: any, changedKey: string) {   
    var found = false;
    var subproperties: string[] = [];

    // Recorremos las propiedades
    keys.forEach(key => {  
      if (key === changedKey) { 
        found = true
        obj[key] = this.simpleForm.get(key)?.value
      } else if (typeof obj[key] === "object"){
        subproperties.push(key)
      }
    })

    if(!found) { 
      subproperties.forEach(key => {
        this.updateObject(Object.keys(obj[key]), obj[key], changedKey)
      })
    }
  }

  private createSimpleForm(keys: string[], obj: any, group: {[key: string]: any}){   
    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        this.createSimpleForm(Object.keys(property), property, group)
      } else {
        group[key] = new FormControl(this.mySimpleObject[key])
      }
    })

    this.simpleForm = this.fb.group(group)
  }

  private createSimpleProperties(keys: string[], obj: any) {   
    
    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        this.createSimpleProperties(Object.keys(property), property)
      } else {
        Object.defineProperty(this.mySimpleObject, key, {value: property});
      }
    })
  }

  private loadProperties(){
    if(this.object != undefined){
      // No son necesarios de momento
      this.getComplexProperties(Object.keys(this.object), this.object, false)    
      this.getComplexForm(Object.keys(this.object), this.object, this.firstForm, this.objectForm)
  
      // Objeto y formularios utilizados actualmente
      var group :{[key: string]: any} = {}
      this.createSimpleProperties(Object.keys(this.object), this.object) 
      this.createSimpleForm(Object.keys(this.object), this.object, group)
    }
  }

  ngOnInit(): void { 
    this.loadProperties()
    
  }

  onSubmit(){
    Object.keys(this.simpleForm.getRawValue()).forEach((key) => {
      console.log(this.simpleForm.controls[key].value)
    });
    return true;
  }

  onChange(key: any){
    if(this.object != undefined)
      this.updateObject(Object.keys(this.object), this.object, key)
    console.log(this.object)
  }

}
