import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPizzaFooterComponent } from './app-pizza-footer.component';

describe('AppPizzaFooterComponent', () => {
  let component: AppPizzaFooterComponent;
  let fixture: ComponentFixture<AppPizzaFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPizzaFooterComponent]
    });
    fixture = TestBed.createComponent(AppPizzaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
