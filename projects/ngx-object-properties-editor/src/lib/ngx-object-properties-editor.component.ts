import { Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-object-properties-editor',
  host: {
		"[class.light-theme]": "( theme === 'light' )",
		"[class.dark-theme]": "( theme === 'dark' )",
    "[class.muret-theme]": "( theme === 'muret' )",
    "[class.custom]": "( theme === 'custom' )"
	},
  templateUrl: './ngx-object-properties-editor.component.html',
  styleUrls: ['./ngx-object-properties-editor.component.css','./themes.css']
})

export class NgxObjectPropertiesEditorComponent implements OnInit, OnChanges {
  @Input() object: Object | undefined;
  @Input() labels: Map<string, string> | undefined;
  @Input() selects: Map<string,any> | undefined;
  @Input() title: string | undefined;
  @Input() theme: string | undefined;
  @Input() hidden: string[] | undefined;
  @Output() onObjectUpdated = new EventEmitter<Object>();

  static DEFINED_THEMES = ["light", "dark", "muret", "custom"];
 
  private mySimpleObject:any = new Object();
  simpleForm: FormGroup = this.fb.group({});
  
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

  isHidden(key: string){
    return (this.hidden != undefined && this.hidden.indexOf(key) > -1)
  }

  isNull(key: string){
    return (this.mySimpleObject[key] == undefined || this.mySimpleObject[key] == null)
  }

  getLabel(key: string){
    if(this.labels != undefined && this.labels.get(key) != undefined){
      return this.labels.get(key)
    }
    return this.firstCapitalLetter(key)
  }

  private firstCapitalLetter(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
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
      if(property == null || property == undefined){
        group[key] = new FormControl(this.mySimpleObject[key])
      }
      else if (typeof property === "object"){
        this.createSimpleForm(Object.getOwnPropertyNames(property), property, group)
      } else {
        group[key] = new FormControl(this.mySimpleObject[key])
      }
    })

    this.simpleForm = this.fb.group(group)
  }

  private createSimpleProperties(keys: string[], obj: any) {  
    if(keys && obj) {
      keys.forEach(key => {
        var property = obj[key]
        
        if(property == null || property == undefined){
          Object.defineProperty(this.mySimpleObject, key, {value: property});
        }
        else if (typeof property == "object"){
          this.createSimpleProperties(Object.getOwnPropertyNames(property), property)
        } else {
          Object.defineProperty(this.mySimpleObject, key, {value: property});
        }
      })
    }
  }

  private loadProperties(){
    if(this.object != undefined){
      var group :{[key: string]: any} = {}
      this.createSimpleProperties(Object.getOwnPropertyNames(this.object), this.object) 
      this.createSimpleForm(Object.getOwnPropertyNames(this.mySimpleObject), this.mySimpleObject, group)
    }

    if(this.theme == undefined || NgxObjectPropertiesEditorComponent.DEFINED_THEMES.indexOf(this.theme) == -1) {
      this.theme = "light";
    }
  }

  onChange(key: string){
    if(this.object != undefined) {
      this.updateObject(Object.keys(this.object), this.object, key)
    }

    console.log(this.object)
    this.onObjectUpdated.emit(this.object)
  }

  ngOnInit(): void { 
    this.loadProperties()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["object"] && this.object && changes["object"]["previousValue"] != this.object){
      this.simpleForm = this.fb.group({});
      this.mySimpleObject = new Object();
      this.loadProperties();
    } 
  }
} 
