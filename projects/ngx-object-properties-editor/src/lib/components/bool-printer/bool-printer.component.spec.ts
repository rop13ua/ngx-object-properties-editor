import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { BoolPrinterComponent } from './bool-printer.component';

describe('BoolPrinterComponent', () => {
  let component: BoolPrinterComponent;
  let fixture: ComponentFixture<BoolPrinterComponent>;

  beforeEach(async () => {
    const fb = new FormBuilder()

    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
      test: fb.control(true)
    });

    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ BoolPrinterComponent],
      providers: [
        FormGroupDirective,
        FormBuilder,
        {provide: FormGroupDirective, useValue: formGroupDirective}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolPrinterComponent);
    component = fixture.componentInstance;
    component.form_elem = "test";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print correctly radio buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    var inputs = compiled.querySelectorAll('input');
    var labels = compiled.querySelectorAll('label');
    
    expect(inputs.length).toBe(2);
    expect(inputs[0].getAttribute('type')).toBe("radio")
    expect(labels[0].textContent).toBe("True")
    expect(inputs[1].getAttribute('type')).toBe("radio")
    expect(labels[1].textContent).toBe("False")
  });
});
