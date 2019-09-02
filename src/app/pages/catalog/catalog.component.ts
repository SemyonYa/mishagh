import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Good} from '../../models/good';
import {CartService} from '../../services/cart.service';
import {CartItemView} from '../../models/view/cart-item-view';
import {Category} from '../../models/category';
import {GoodGroup} from '../../models/good-group';
import {GoodGroupView} from '../../models/view/good-group-view';
import {GoodView} from '../../models/view/good-view';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  isCatalog = false;
  categories: Category[] = [];
  goodGroups: GoodGroup[] = [];
  goods: Good[] = [];
  currentCategory: Category;
  currentCategoryGoodGroups: GoodGroupView[] = [];
  currentCart: CartItemView[] = [];

  constructor(private dataService: DataService, private cartService: CartService) {
  }

  ngOnInit() {
    this.dataService.getGoods().subscribe(
      (data: Good[]) => this.goods = data
    );
    this.dataService.getGoodGroups().subscribe(
      (data: GoodGroup[]) => this.goodGroups = data
    );
    this.dataService.getCategories().subscribe(
      (data: Category[]) => this.categories = data
    );
  }

  toCart(id: number, q: number) {
    this.cartService.add(new CartItemView(id, q));
  }

  showCategory(id: number) {
    this.currentCart = this.cartService.get();
    this.isCatalog = true;
    this.currentCategory = this.categories.find(c => c.id === id);
    const ggs = this.goodGroups.filter(gg => gg.categoryId === id);
    this.currentCategoryGoodGroups = [];
    for (const gg of ggs) {
      const currentGG = new GoodGroupView();
      currentGG.goodGroup = gg;
      for (const g of this.goods) {
        if (gg.id === g.goodGroupId) {
          const currentCartItem: CartItemView = this.currentCart.find(currentItem => currentItem.id === g.id);
          const currentQuantity = (currentCartItem) ? currentCartItem.q : 0;
          currentGG.goods.push(new GoodView(g, currentQuantity));
        }
      }
      this.currentCategoryGoodGroups.push(currentGG);
    }
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
}
