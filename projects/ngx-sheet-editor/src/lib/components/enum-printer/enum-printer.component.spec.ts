import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EnumPrinterComponent } from './enum-printer.component';

describe('EnumPrinterComponent', () => {
  let component: EnumPrinterComponent;
  let fixture: ComponentFixture<EnumPrinterComponent>;

  beforeEach(async () => {
    const fb = new FormBuilder()

    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
      test: fb.control(null)
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
    component.form_elem = "test";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
