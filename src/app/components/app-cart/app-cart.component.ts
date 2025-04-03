import { Component } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.scss'],
})
export class AppCartComponent {
  constructor(public itemsService: ItemsService) {}

  onRemoveItemClick(id: number) {
    let item = this.itemsService.cartItems.find((i) => i.id === id);

    if (item) {
      let itemIdx = this.itemsService.cartItems.findIndex((i) => i.id === id);
      this.itemsService.cartItems.splice(itemIdx, 1);
      item.details.available = true;
    }
  }
}
