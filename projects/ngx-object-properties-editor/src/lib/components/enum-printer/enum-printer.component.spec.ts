import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
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
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should print short enum', () => {
    component = fixture.componentInstance;
    component.form_elem = "testShort";
    component.select = ["0", "1", "2", "blue", "red", "green"]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy()
    expect(compiled.querySelector('input')?.getAttribute('type')).toBe('radio')
    expect(compiled.querySelector('label')?.textContent).toBe('blue')
  })

  it('should print long enum', () => {
    component = fixture.componentInstance;
    component.form_elem = "testLong";
    component.select = ["0", "1", "2","3","4","5","spain", "france", "germany", "italy", "sweden", "united_kingdom"]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('select')).toBeTruthy()
    expect(compiled.querySelector('option')?.getAttribute('value')).toBe('0')
    expect(compiled.querySelector('option')?.textContent).toBe('spain')
  })
});
