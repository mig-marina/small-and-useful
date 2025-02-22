import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSearchDirectiveShellComponent } from './highlight-search-directive-shell.component';

describe('HighlightSearchDirectiveShellComponent', () => {
  let component: HighlightSearchDirectiveShellComponent;
  let fixture: ComponentFixture<HighlightSearchDirectiveShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightSearchDirectiveShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightSearchDirectiveShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
