import { Component,Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-ngx-sheet-editor',
  templateUrl: './ngx-sheet-editor.component.html',
  styleUrls: ['./ngx-sheet-editor.component.css']
})

export class NgxSheetEditorComponent implements OnInit {
  @Input() object: any;

  myObject = new Object();
  
  constructor(public fb: FormBuilder) { }

  getProperties(keys: string[], obj: any, isSubElement?: boolean, lastKey?: string) {
    //debugger
    class ObjectSubproperty{
      key: string = "";
      value: Array<{key: string, subvalue: string}> = new Array<{key: string, subvalue: string}>();
    }
    var objectSubproperty: ObjectSubproperty = new ObjectSubproperty()

    if(isSubElement && lastKey != undefined){
      objectSubproperty.key = lastKey;
    }

    keys.forEach(key => {
      var property = obj[key]
      
      if (typeof property === "object"){
        var result: any
        result = this.getProperties(Object.keys(property), property, true, key)
        if(result != undefined){
          Object.defineProperty(this.myObject, result.key, {value: result.value})
        }
      } else {
        if(isSubElement)
          objectSubproperty.value.push({key: key, subvalue: property})
        else
          Object.defineProperty(this.myObject, key, {value: property})
      }
    })

    if(isSubElement) { return objectSubproperty}
    else {return undefined}
  }

  ngOnInit(): void { 
    console.log(this.object) 
    this.getProperties(Object.keys(this.object), this.object, false) 
    console.log(this.myObject)
  }

}
