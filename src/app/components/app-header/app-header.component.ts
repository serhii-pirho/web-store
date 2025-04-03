import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(public itemsService: ItemsService) {}
  @Output() cartClicked = new EventEmitter<boolean>();
  @Output() homeClicked = new EventEmitter<boolean>();
  @Output() gameClicked = new EventEmitter<boolean>();
  @Output() pizzaClicked = new EventEmitter<boolean>();

  onCartClicked() {
    this.cartClicked.emit(true);
  }

  onHomeClicked(): void {
    this.homeClicked.emit(true);
  }

  onGameClicked(): void {
    this.gameClicked.emit(true);
  }

  onPizzaClicked(): void {
    this.pizzaClicked.emit(true);
  }
}
