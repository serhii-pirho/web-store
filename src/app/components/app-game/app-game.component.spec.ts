import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGameComponent } from './app-game.component';

describe('AppGameComponent', () => {
  let component: AppGameComponent;
  let fixture: ComponentFixture<AppGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppGameComponent]
    });
    fixture = TestBed.createComponent(AppGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
