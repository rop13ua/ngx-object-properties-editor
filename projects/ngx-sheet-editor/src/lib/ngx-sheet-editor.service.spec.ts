import { TestBed } from '@angular/core/testing';

import { NgxSheetEditorService } from './ngx-sheet-editor.service';

describe('NgxSheetEditorService', () => {
  let service: NgxSheetEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSheetEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
