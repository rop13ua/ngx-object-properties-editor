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
});
