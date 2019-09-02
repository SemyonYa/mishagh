import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from './services/cart.service';
import {MenuItem} from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'VIKAR';
  counter: number;
  menu: Set<MenuItem> = new Set();
  isCollapsed = true;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.items.subscribe(data => this.counter = (data) ? data.length : 0);
    this.menu
      .add(new MenuItem('Главная', '/'))
      .add(new MenuItem('Каталог', '/catalog'))
      .add(new MenuItem('Установка', '/install'))
      .add(new MenuItem('Контакты', '/contact'));
  }

  hideMobileMenu() {
    this.isCollapsed = true;
  }

  onActivate() {
    // document.body.scrollTop = 0;
  }
}
