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
  enumPrueba: any;
  title = 'demo';
  lab: Map<string,string> = new Map();
  enums: Map<string,any> = new Map();

  ngOnInit(): void {
    var prueba = {Persona: {Nombre:"Raquel", Apellidos: {Ap1: "Ortega", Ap2: "Perez"}}, Edad: 12, DNI:"50384811E", Bloqueado: false}
    
    enum equiposEnum {"G2", "FNATIC", "MADLions","Rogue", "Excel", "Astralis", "Vitality"}
    enum posicion {"TOP", "MID", "ADC", "SUPP"}
    
    this.enums = new Map().set("Posicion",posicion).set("Equipo", equiposEnum)

    this.enumPrueba = {Jugador: {Nombre:"Victor", Apellido: "Lirola"}, Posicion: posicion.ADC, Equipo: equiposEnum.G2, Activo: false}

    this.lab = new Map().set("id", "Número ID")
                          .set("doors", "Puertas")
                          .set("type","Tipo")
                          .set("windows", "Número de ventanas")
                          .set("color", "Color");
    
    this.prueba = prueba
    this.house = HOUSE[1]
  }
}
