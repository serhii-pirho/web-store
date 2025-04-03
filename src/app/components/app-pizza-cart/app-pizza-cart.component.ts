import { Component } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';

@Component({
  selector: 'app-pizza-cart',
  templateUrl: './app-pizza-cart.component.html',
  styleUrls: ['./app-pizza-cart.component.scss'],
})
export class AppPizzaCartComponent {
  constructor(public itemsService: ItemsService) {}

  onRemoveItemClick(id: number) {
    let item = this.itemsService.pizzaItems.find((i) => i.id === id);

    if (item) {
      let itemIdx = this.itemsService.pizzaItems.findIndex((i) => i.id === id);
      this.itemsService.pizzaItems.splice(itemIdx, 1);
      this.itemsService.pizzasTotal -= item.price!;
    }
  }
}
