import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {CartItem} from '../models/cart-item';


export class CartService {
  items = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.items.next(this.get());
  }

  get(): CartItem[] {
    const cs = <CartItem[]>JSON.parse(localStorage.getItem('cart'));
    console.log('get', cs);
    return cs;
  }

  set(cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.items.next(cart);
    console.log('set', cart);
  }

  add(item: CartItem) {
    let cart: CartItem[] = this.get();
    if (cart === null) {
      cart = [];
    }
    cart.push(item);
    this.set(cart);
  }

  clear() {
    this.set([]);
  }
}
