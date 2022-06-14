import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSheetEditorComponent } from './ngx-sheet-editor.component';

describe('NgxSheetEditorComponent', () => {
  let component: NgxSheetEditorComponent;
  let fixture: ComponentFixture<NgxSheetEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSheetEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSheetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    const fixture = TestBed.createComponent(NgxSheetEditorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain('Nombre:');
  });

});
