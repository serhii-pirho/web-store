import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppCartComponent } from './components/app-cart/app-cart.component';
import { AppGameComponent } from './components/app-game/app-game.component';
import { AppPizzaComponent } from './components/app-pizza/app-pizza.component';
import { AppPizzaHeaderComponent } from './components/app-pizza-header/app-pizza-header.component';
import { AppAboutUsPizzaComponent } from './components/app-about-us-pizza/app-about-us-pizza.component';
import { AppPizzaFooterComponent } from './components/app-pizza-footer/app-pizza-footer.component';
import { AppPizzaCartComponent } from './components/app-pizza-cart/app-pizza-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHomeComponent,
    AppCartComponent,
    AppGameComponent,
    AppPizzaComponent,
    AppPizzaHeaderComponent,
    AppAboutUsPizzaComponent,
    AppPizzaFooterComponent,
    AppPizzaCartComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
