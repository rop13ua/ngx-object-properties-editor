import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxObjectPropertiesEditorComponent } from './ngx-object-properties-editor.component';

describe('NgxObjectPropertiesEditorComponent', () => {
  let component: NgxObjectPropertiesEditorComponent;
  let fixture: ComponentFixture<NgxObjectPropertiesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ NgxObjectPropertiesEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxObjectPropertiesEditorComponent);
    component = fixture.componentInstance;

    enum trabajo {"jornada-completa", "media-jornada", "paro", "estudiante"} 
    enum color_ojos {"azul","marron","verde","negros","grises","pardos","miel"}  
    component.selects = new Map().set("trabajo",trabajo).set("ojos", color_ojos)
    component.object = {Persona: {nombre:"Raquel", apellidos: {ap1: "Ortega", ap2: "Perez"}}, bloqueado: false, trabajo: trabajo.estudiante, ojos: color_ojos.marron, edad: 22}
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
    expect(elements[2].textContent).toContain('Ap2:');
  });

  it('should not render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;   
    expect(compiled.querySelector('h2')).toBeFalsy();
  });

  it('should render correct title', () => {
    component.title = "TEST"
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('h2')?.textContent).toContain('TEST');
  });

  it('should render bool component when bool attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;   
    expect(compiled.querySelector('lib-bool-printer')).toBeTruthy();
  });

  it('should render numeric and text inputs', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    var elements = compiled.querySelectorAll('input');
    expect(elements[3].type).toBe('number');
    expect(elements[1].type).toBe('text');
  });

  it('should render enum component when enum attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;   
    expect(compiled.querySelector('lib-enum-printer')).toBeTruthy();;
  });

  it('should call onChange function', () => {
    spyOn(component, 'onChange');       
    fixture.debugElement.query(By.css('lib-bool-printer')).triggerEventHandler('changed', null);
    expect(component.onChange).toHaveBeenCalled()
  });

  it('should dispatch event when object is updated', () => {
    spyOn(component.onObjectUpdated, 'emit')  
    fixture.detectChanges();
    component.onChange('nombre')
    expect(component.onObjectUpdated.emit).toHaveBeenCalled();
  });

  it('should update object correctly', () => { 
    component.simpleForm.get("nombre")?.setValue("Nuevo nombre")
    component.onChange("nombre")
   
    var obj = component.object as any
    var realValue = obj["Persona"]["nombre"]
    
    expect(realValue).toBe("Nuevo nombre")
  });

  it('should hide indicated property', () => {
    var hidden = ["nombre", "edad", "hola"]
    component.hidden = hidden
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.innerHTML).not.toContain('Nombre:');
    expect(compiled.innerHTML).not.toContain('Edad:');
  })

  it('should use light theme', () => {
    let lightLabelColor = "rgb(32, 33, 36)";
    const compiled = fixture.nativeElement as HTMLElement;   
    var elements = compiled.querySelectorAll('label'); 
    expect(getComputedStyle(elements[0]).color).toBe(lightLabelColor);
  })

  it('should use dark theme', () => {
    component.theme = "dark"
    fixture.detectChanges()
    let darkLabelColor = "rgb(254, 254, 254)";
    const compiled = fixture.nativeElement as HTMLElement;   
    var elements = compiled.querySelectorAll('label'); 
    expect(getComputedStyle(elements[0]).color).toBe(darkLabelColor);
  })

  it('should use custom theme', () => {
    component.theme = "custom";
    fixture.detectChanges()
    let lightLabelColor = "rgb(32, 33, 36)";
    const compiled = fixture.nativeElement as HTMLElement;   
    var elements = compiled.querySelectorAll('label'); 
    expect(getComputedStyle(elements[0]).color).not.toBe(lightLabelColor);
  })

});
