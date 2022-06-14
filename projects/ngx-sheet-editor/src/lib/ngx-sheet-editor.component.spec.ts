import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NgxSheetEditorComponent } from './ngx-sheet-editor.component';

describe('NgxSheetEditorComponent', () => {
  let component: NgxSheetEditorComponent;
  let fixture: ComponentFixture<NgxSheetEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ NgxSheetEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSheetEditorComponent);
    component = fixture.componentInstance;
    enum trabajo {"jornada-completa", "media-jornada", "paro", "estudiante"} 
    enum color_ojos {"azul","marron","verde","negros","grises","pardos","miel"}  
    component.selects = new Map().set("trabajo",trabajo).set("ojos", color_ojos)
    component.object = {Persona: {nombre:"Raquel", apellidos: {ap1: "Ortega", ap2: "Perez"}}, bloqueado: false, trabajo: trabajo.estudiante, ojos: color_ojos.marron}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct names in labels', () => {
    var labels = new Map().set("nombre", "Nombre").set("ap1", "Primer Apellido");
    component.labels = labels
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    var elements = compiled.querySelectorAll('label');

    expect(elements[0].textContent).toContain('Nombre:');
    expect(elements[1].textContent).toContain('Primer Apellido:');
    expect(elements[2].textContent).toContain('ap2:');
  });

  it('should not render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;   
    expect(compiled.querySelector('h2')).not.toBe;
  });

  it('should render correct title', () => {
    component.title = "TEST"
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('h2')?.textContent).toContain('TEST');
  });

  it('should render bool component when bool attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;   
    expect(compiled.querySelector('lib-bool-printer')).toBe;
  });

  it('should render enum component when enum attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;   
    expect(compiled.querySelector('lib-enum-printer')).toBe;
  });

});
