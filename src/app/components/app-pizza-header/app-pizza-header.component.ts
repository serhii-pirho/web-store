import { Component, EventEmitter, Output } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';

@Component({
  selector: 'app-pizza-header',
  templateUrl: './app-pizza-header.component.html',
  styleUrls: ['./app-pizza-header.component.scss'],
})
export class AppPizzaHeaderComponent {
  constructor(public itemsService: ItemsService) {}
  @Output() pizzaHomeClicked = new EventEmitter<boolean>();
  @Output() pizzaAboutUsClicked = new EventEmitter<boolean>();
  @Output() pizzaCartClicked = new EventEmitter<boolean>();
  @Output() backClicked = new EventEmitter<boolean>();

  onPizzaHomeClicked() {
    this.pizzaHomeClicked.emit(true);
  }

  onPizzaAboutUsClicked(): void {
    this.pizzaAboutUsClicked.emit(true);
  }

  onPizzaCartClicked(): void {
    this.pizzaCartClicked.emit(true);
  }

  onBackClicked(): void {
    this.backClicked.emit(true);
  }
}
