import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCartComponent } from './app-cart.component';

describe('AppCartComponent', () => {
  let component: AppCartComponent;
  let fixture: ComponentFixture<AppCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCartComponent]
    });
    fixture = TestBed.createComponent(AppCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
