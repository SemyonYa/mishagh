import {GoodGroup} from '../good-group';
import {GoodView} from './good-view';

export class GoodGroupView {
  goodGroup: GoodGroup;
  goods: GoodView[];

  constructor() {
    this.goods = [];
  }
}
