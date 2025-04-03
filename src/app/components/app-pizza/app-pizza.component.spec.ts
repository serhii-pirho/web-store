import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPizzaComponent } from './app-pizza.component';

describe('AppPizzaComponent', () => {
  let component: AppPizzaComponent;
  let fixture: ComponentFixture<AppPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPizzaComponent]
    });
    fixture = TestBed.createComponent(AppPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
