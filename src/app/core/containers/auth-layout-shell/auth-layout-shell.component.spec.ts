import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoutShellComponent } from './auth-layout-shell.component';

describe('AuthLayoutShellComponent', () => {
  let component: AuthLayoutShellComponent;
  let fixture: ComponentFixture<AuthLayoutShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoutShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayoutShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
