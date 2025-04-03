import { ItemsService } from 'src/app/shared/items.service';
import { Item } from './../../shared/item.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
})
export class AppHomeComponent {
  constructor(public itemsService: ItemsService) {}
  public items: Item[] = [];

  ngOnInit() {
    this.items = this.itemsService.items;
  }

  onAddItemClick(id: number): void {
    let item = this.items.find((i) => i.id === id);

    if (item) {
      this.itemsService.cartItems.push(item);
      console.log(this.itemsService.cartItems);
      item.details.available = false;
    }
  }
}
