import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'board-games-store';

  public displayHome = true;
  public displayCart = false;
  public displayGame = false;
  public displayPizza = false;
  public displayPizzaHome = false;
  public displayPizzaAboutUs = false;
  public displayPizzaCart = false;

  onCartClicked(): void {
    this.displayCart = true;
    this.displayHome = false;
    this.displayGame = false;
    this.displayPizza = false;
  }

  onHomeClicked(): void {
    this.displayCart = false;
    this.displayGame = false;
    this.displayHome = true;
    this.displayPizza = false;
  }

  onGameClicked(): void {
    this.displayCart = false;
    this.displayHome = false;
    this.displayGame = true;
    this.displayPizza = false;
  }

  onPizzaClicked(): void {
    this.displayCart = false;
    this.displayHome = false;
    this.displayGame = false;
    this.displayPizza = true;
    this.displayPizzaHome = true;
    this.displayPizzaAboutUs = false;
    this.displayPizzaCart = false;
  }

  onPizzaHomeClicked(): void {
    this.displayCart = false;
    this.displayHome = false;
    this.displayGame = false;
    this.displayPizza = true;
    this.displayPizzaHome = true;
    this.displayPizzaAboutUs = false;
    this.displayPizzaCart = false;
  }

  onPizzaAboutUsClicked(): void {
    this.displayCart = false;
    this.displayHome = false;
    this.displayGame = false;
    this.displayPizza = true;
    this.displayPizzaHome = false;
    this.displayPizzaAboutUs = true;
    this.displayPizzaCart = false;
  }

  onPizzaCartClicked(): void {
    this.displayCart = false;
    this.displayHome = false;
    this.displayGame = false;
    this.displayPizza = true;
    this.displayPizzaHome = false;
    this.displayPizzaAboutUs = false;
    this.displayPizzaCart = true;
  }

  onBackClicked(): void {
    this.displayCart = false;
    this.displayGame = false;
    this.displayHome = true;
    this.displayPizza = false;
  }
}
