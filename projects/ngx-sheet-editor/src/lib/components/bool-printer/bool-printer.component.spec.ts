import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormBuilder, FormControlDirective, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { BoolPrinterComponent } from './bool-printer.component';

describe('BoolPrinterComponent', () => {
  let component: BoolPrinterComponent;
  let fixture: ComponentFixture<BoolPrinterComponent>;

  beforeEach(async () => {
    const fb = new FormBuilder()

    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
      test: fb.control(null)
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
});
