import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Good} from "../../models/good";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item";
import {Category} from "../../models/category";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  isCatalog = false;
  goods: Good[] = [];
  categories: Category[] = [];
  currentCategoryGoods: Good[] = [];
  currentCategory: Category;

  constructor(private dataService: DataService, private cartService: CartService) {
  }

  ngOnInit() {
    this.goods = this.dataService.getGoods();
    this.categories = this.dataService.getCategories();
  }

  toCart(id: number, q: number) {
    this.cartService.add(new CartItem(id, q));
  }

  showCategory(id: number) {
    this.isCatalog = true;
    this.currentCategoryGoods = this.goods.filter(g => g.category === id);
    this.currentCategory = this.categories.find(c => c.id === id);
  }

}
