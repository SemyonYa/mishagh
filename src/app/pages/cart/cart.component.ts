import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from "../../models/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.items.subscribe(data => this.items = data);
  }

  toCart(id: number, quantity: number) {
    this.cartService.add(new CartItem(id, quantity));
  }

  clear() {
    this.cartService.clear();
  }
}
