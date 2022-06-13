import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolPrinterComponent } from './bool-printer.component';

describe('BoolPrinterComponent', () => {
  let component: BoolPrinterComponent;
  let fixture: ComponentFixture<BoolPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
