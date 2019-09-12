import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {CartItemView} from '../models/view/cart-item-view';


export class CartService {
  items = new BehaviorSubject<CartItemView[]>([]);

  constructor() {
    if (this.get() === null) {
      this.set([]);
    }
    this.items.next(this.get());
  }

  get(): CartItemView[] {
    const cs: CartItemView[] = <CartItemView[]>JSON.parse(localStorage.getItem('cart'));
    // console.log('get', cs);
    return cs;
  }

  set(cart: CartItemView[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.items.next(cart);
    // console.log('set', cart);
  }

  add(item: CartItemView) {
    let cart: CartItemView[] = this.get();
    if (cart === null) {
      cart = [];
    }
    const found = cart.find(ci => ci.id === item.id);
    console.log('found', found);
    if (found == null) {
      console.log('null')
      if (item.q > 0) {
        cart.push(item);
      }
    } else {
      cart.splice(cart.indexOf(found), 1);
      if (item.q > 0) {
        cart.push(item);
      }
    }
    // cart.push(item);
    this.set(cart);
  }

  clear() {
    this.set([]);
  }
}
