import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPizzaCartComponent } from './app-pizza-cart.component';

describe('AppPizzaCartComponent', () => {
  let component: AppPizzaCartComponent;
  let fixture: ComponentFixture<AppPizzaCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPizzaCartComponent]
    });
    fixture = TestBed.createComponent(AppPizzaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
