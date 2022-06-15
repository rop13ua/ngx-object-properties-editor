import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EnumPrinterComponent } from './enum-printer.component';

describe('EnumPrinterComponent', () => {
  let component: EnumPrinterComponent;
  let fixture: ComponentFixture<EnumPrinterComponent>;
  enum testEnumShort {"blue", "red", "green"}
  enum testEnumLong {"spain", "france", "germany", "italy", "sweden", "united_kingdom", "greece"}

  beforeEach(async () => {
    const fb = new FormBuilder()
    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
      testShort: fb.control(testEnumShort.blue),
      testLong: fb.control(testEnumLong.spain)
    });

    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ EnumPrinterComponent ],
      providers: [
        FormGroupDirective,
        FormBuilder,
        {provide: FormGroupDirective, useValue: formGroupDirective}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumPrinterComponent);
    component = fixture.componentInstance;
    component.form_elem = "testShort";
    component.select = ["0", "1", "2", "blue", "red", "green"]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print short enum', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy()
    expect(compiled.querySelector('input')?.getAttribute('type')).toBe('radio')
    expect(compiled.querySelector('label')?.textContent).toBe('blue')
  })
});
