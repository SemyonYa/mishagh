import {Good} from '../good';

export class GoodView {
  good: Good;
  quantity: number;

  constructor(good: Good, quantity: number) {
    this.good = good;
    this.quantity = quantity;
  }
}
