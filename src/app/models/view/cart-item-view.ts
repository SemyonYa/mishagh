import {CartItemWithGood} from './cart-item-with-good';
import {Good} from '../good';

export class CartItemView {
  id: number;
  q: number;

  constructor(id: number, q: number) {
    this.id = id;
    this.q = q;
  }

  newCartItemWithGood(good: Good): CartItemWithGood {
    return new CartItemWithGood(good, this.q);
  }
}
