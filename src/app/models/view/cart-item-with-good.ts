import {Good} from '../good';

export class CartItemWithGood {
  goodId: number;
  good: Good;
  quantity: number;

  constructor(good: Good, q: number) {
    this.goodId = good.id;
    this.good = good;
    this.quantity = q;
  }

  sum(): number {
    return this.good.price * this.quantity;
  }

  brief() {
    let txt = '(';
    txt += (this.good.thickness) ? this.good.thickness + '; ' : '';
    txt += (this.good.size) ? this.good.size + '; ' : '';
    txt += (this.good.length) ? this.good.length + '; ' : '';
    txt += (this.good.width) ? this.good.width + '; ' : '';
    txt = txt.substr(0, txt.length - 2);
    txt += ')';
    return txt;
  }
}
