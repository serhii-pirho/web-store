import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutUsPizzaComponent } from './app-about-us-pizza.component';

describe('AppAboutUsPizzaComponent', () => {
  let component: AppAboutUsPizzaComponent;
  let fixture: ComponentFixture<AppAboutUsPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAboutUsPizzaComponent]
    });
    fixture = TestBed.createComponent(AppAboutUsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
