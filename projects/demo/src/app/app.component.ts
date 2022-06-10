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
  
  prueba: any;
  house: any;
  title = 'demo';
  lab: Map<string,string> = new Map();

  ngOnInit(): void {
    var prueba = {Persona: {Nombre:"Raquel", Apellidos: {Ap1: "Ortega", Ap2: "Perez"}}, Edad: 12, DNI:"50384811E", Bloqueado: false}
    this.lab = new Map().set("id", "Número ID")
                          .set("doors", "Puertas")
                          .set("type","Tipo")
                          .set("windows", "Número de ventanas")
                          .set("color", "Color");
    
    this.prueba = prueba
    this.house = HOUSE[1]
  }
}
