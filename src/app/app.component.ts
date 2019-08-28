import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'VIKAR';
  counter: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.items.subscribe(data => this.counter = data.length);
  }

}
