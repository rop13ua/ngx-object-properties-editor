import { Component, OnInit } from '@angular/core';
import { PEOPLE } from './mock-object';
import { HOUSE } from './mock-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() { }
  
  people: any;
  houses: any;
  title = 'demo';

  ngOnInit(): void {
    var prueba = {prop1: {1:"hola1",2:"hola2"}, prop2: "adios"}
    this.people = prueba
    //this.people = "hola"
    this.houses = HOUSE
  }
}
