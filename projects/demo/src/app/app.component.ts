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
    var prueba = {Persona: {Nombre:"Raquel", Apellidos: {Ap1: "Ortega", Ap2: "Perez"}}, Edad: 12, DNI:"50384811E"}
    this.people = prueba
    //this.people = "hola"
    this.houses = HOUSE
  }
}
