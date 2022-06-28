import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { eyesEnum, handEnum } from './enums';

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
  title = 'Example form';
  labels: Map<string,string> = new Map();
  enums: Map<string,any> = new Map();
  theme: string = "custom"

  ngOnInit(): void { 
    this.test = {person: {name:"Raquel", surnames: {s1: "Ortega", s2: "Pérez"}}, age: 22, eyes: this.EyesEnum['Dark brown'], hands: this.HandsEnum['Right-handed']}
    
    this.enums = new Map().set("eyes",eyesEnum).set("hands", handEnum)

    this.labels = new Map().set("name", "Name")
                          .set("s1", "First surname")
                          .set("s2","Second surname")
                          .set("age", "Age")
                          .set("eyes", "Eye color")
                          .set("hands", "Dominant hand")
    
  }

  onChange(e: any) {
    console.log(e.target.value)
    this.theme = e.target.value
  }
}
