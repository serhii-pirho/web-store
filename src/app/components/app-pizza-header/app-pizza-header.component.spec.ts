import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPizzaHeaderComponent } from './app-pizza-header.component';

describe('AppPizzaHeaderComponent', () => {
  let component: AppPizzaHeaderComponent;
  let fixture: ComponentFixture<AppPizzaHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPizzaHeaderComponent]
    });
    fixture = TestBed.createComponent(AppPizzaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
