import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { eyesEnum, handEnum, Accidental } from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit{
  constructor(private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#ffe7f9';
}

  EyesEnum = eyesEnum;
  HandsEnum = handEnum;

  test: any;
  testPerson: any;
  testHouse: any;
  title = 'Example form';
  labels: Map<string,string> = new Map();
  hidden: string[] = [];
  enums: Map<string,any> = new Map();
  theme: string = "custom";

  ngOnInit(): void { 
    this.generateObject(1);
    this.generateObject(2);
    this.test = this.testPerson
  }

  generateObject(obj: number){
    if(obj == 1){
      this.testPerson = {person: {name: "Raquel", surnames: {s1: "Ortega", s2: "Pérez"}}, age: 22, eyes: this.EyesEnum['Dark brown'], hands: this.HandsEnum['Right-handed']}
    
      this.enums = new Map().set("eyes",eyesEnum).set("hands", handEnum)

      //this.hidden = ["hands"];

      this.labels = new Map().set("name", "Name")
                            .set("s1", "First surname")
                            .set("s2","Second surname")
                            .set("age", "Age")
                            .set("eyes", "Eye color")
                            .set("hands", "Dominant hand")

    }
    else if (obj == 2){
      this.testHouse = {house: "Bungalow", windows: 5, occupied: true}
      this.labels = new Map().set("house", "Type of house")
                            .set("windows", "Number of windows")
                            .set("occupied","Is ocuppied?")
    }
  }

  changeForm(selected: number){
    if(selected == 1){
      this.test = this.testPerson;
    } 
    else if(selected == 2){
      this.test = this.testHouse;
    }
  }

  onChange(e: any) {
    console.log(e.target.value)
    this.theme = e.target.value
  }
}
