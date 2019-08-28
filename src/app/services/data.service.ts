import { Injectable } from '@angular/core';
import {Good} from "../models/good";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getGoods(): Good[] {
    let goods: Good[] = [];
    for (let i = 1; i < 16; i++) {
      goods.push(new Good(i, `Товар ${i}`, `Описание товара ${i}`, i * i * 58, i % 4 + 1))
    }
    return goods;
  }
  getGood(id: number): Good {
    return new Good(111, `Полученный товар`, `Данный товар получен по его идентификатору ${id}`, 10500, 5);
  }

  getCategories(): Category[] {
    return [
      new Category(1, 'Вибропоглощающие материалы'),
      new Category(2, 'Шумо-теплоизолирующие материалы'),
      new Category(3, 'Антискрипскрипные материалы'),
      new Category(4, 'Гидроизолирующие и герметизирующие материалы')
    ];
  }
}
