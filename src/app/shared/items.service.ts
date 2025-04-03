import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  public items: Item[] = [
    new Item(1, 'action', {
      title: 'Action Game',
      price: 10,
      available: true,
      imageUrl: '/',
    }),
    new Item(2, 'adventure', {
      title: 'Adventure Game',
      price: 19,
      available: true,
      imageUrl: '/',
    }),
    new Item(3, 'family', {
      title: 'Family Game',
      price: 15,
      available: true,
      imageUrl: '/',
    }),
    new Item(4, 'kids', {
      title: 'Kids Game',
      price: 10,
      available: true,
      imageUrl: '/',
    }),
    new Item(5, 'action', {
      title: 'Action Game 2',
      price: 10,
      available: true,
      imageUrl: '/',
    }),
    new Item(6, 'family', {
      title: 'Family Game 2',
      price: 13,
      available: true,
      imageUrl: '/',
    }),
    new Item(7, 'kids', {
      title: 'Kids Game 2',
      price: 10,
      available: true,
      imageUrl: '/',
    }),
    new Item(8, 'action', {
      title: 'Action Game',
      price: 10,
      available: true,
      imageUrl: '/',
    }),
    new Item(9, 'adventure', {
      title: 'Adventure Game 2',
      price: 25,
      available: true,
      imageUrl: '/',
    }),
    new Item(10, 'action', {
      title: 'Action Game 3',
      price: 11,
      available: true,
      imageUrl: '/',
    }),
  ];

  public pizzas: Pizza[] = [
    new Pizza(1, {
      title: 'Margerita',
      price: 8.9,
      imageUrl: 'assets/margerita.png',
    }),
    new Pizza(2, {
      title: 'Cheese',
      price: 9.9,
      imageUrl: 'assets/cheese.png',
    }),
    new Pizza(3, {
      title: 'Pepperoni',
      price: 10.9,
      imageUrl: 'assets/pepperoni.png',
    }),
    new Pizza(4, {
      title: 'Chicken BBQ',
      price: 11.9,
      imageUrl: 'assets/chickenbbq.png',
    }),
    new Pizza(5, { title: 'Tuna', price: 10.5, imageUrl: 'assets/tuna.png' }),
  ];

  public cartItems: Item[] = [];
  public pizzaItems: Pizza[] = [];
  public pizzasTotal = 0;
}
