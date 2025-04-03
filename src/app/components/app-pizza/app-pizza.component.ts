import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';
import { Pizza } from 'src/app/shared/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './app-pizza.component.html',
  styleUrls: ['./app-pizza.component.scss'],
})
export class AppPizzaComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public itemsService: ItemsService
  ) {}
  public pizzas: Pizza[] = [];

  ngOnInit() {
    this.pizzas = this.itemsService.pizzas;
  }

  showDetails(name: string, details: string): void {
    this.document.getElementById('pizza-name')!.textContent = name;
    this.document.getElementById('pizza-details')!.textContent = details;
    this.document.getElementById('popup')!.style.display = 'block';
  }

  closePopup() {
    this.document.getElementById('popup')!.style.display = 'none';
  }

  handleAddToCart(id: number): void {
    let item = this.pizzas.find((i) => i.id === id);

    if (item) {
      this.itemsService.pizzaItems.push(item);
      this.itemsService.pizzasTotal += item.price!;
    }
  }
}
