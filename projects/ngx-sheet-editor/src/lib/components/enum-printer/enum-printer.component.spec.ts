import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumPrinterComponent } from './enum-printer.component';

describe('EnumPrinterComponent', () => {
  let component: EnumPrinterComponent;
  let fixture: ComponentFixture<EnumPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
