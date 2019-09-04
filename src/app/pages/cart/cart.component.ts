import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItemView} from '../../models/view/cart-item-view';
import {DataService} from '../../services/data.service';
import {Good} from '../../models/good';
import {CartItemWithGood} from '../../models/view/cart-item-with-good';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // items: CartItemView[] = [];
  goods: Good[] = [];
  goodItems: CartItemWithGood[] = [];
  sumAll = 0;

  constructor(private cartService: CartService, private data: DataService) {
  }

  ngOnInit() {
    this.data.getGoods().subscribe(
      (gs: Good[]) => {
        this.goods = gs;
        this.cartService.items.subscribe(data => {
          this.goodItems = [];
          this.sumAll = 0;
          for (const cartItem of data) {
            const currentCartItem = new CartItemWithGood(gs.find(g => g.id === cartItem.id), cartItem.q);
            this.sumAll += currentCartItem.sum();
            this.goodItems.push(currentCartItem);
          }
          this.goodItems = this.goodItems.sort((n1, n2) => {
            if (n1.good.id > n2.good.id) {
              return 1;
            }
            if (n1.good.id < n2.good.id) {
              return -1;
            }
            return 0;
          });
          this.goodItems = this.goodItems.sort((n1, n2) => {
            if (n1.good.goodGroupId > n2.good.goodGroupId) {
              return 1;
            }
            if (n1.good.goodGroupId < n2.good.goodGroupId) {
              return -1;
            }
            return 0;
          });
        });

      }
    );
  }

  toCart(id: number, q: number) {
    this.cartService.add(new CartItemView(id, q));
  }

  inputGood(e, goodId: number) {
    const q = e.target.value;
    this.toCart(goodId, q);
  }

  plusGood(e, goodId: number) {
    console.log('plus', goodId);
    e.target.previousSibling.value++;
    const q = e.target.previousSibling.value;
    this.toCart(goodId, q);
  }

  minusGood(e, goodId: number) {
    e.target.nextSibling.value = (e.target.nextSibling.value < 1) ? 0 : e.target.nextSibling.value - 1;
    const q = e.target.nextSibling.value;
    this.toCart(goodId, q);
  }

  clear() {
    this.cartService.clear();
  }
}
