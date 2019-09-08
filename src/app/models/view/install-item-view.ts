import {InstallItem} from '../install-item';
import {Good} from '../good';
import {InstallItemGoodView} from './install-item-good-view';

export class InstallItemView {
  id: number;
  name: string;
  works: string[];
  recommendations: string[];
  asResult: string[];
  goods: InstallItemGoodView[];

  constructor(ii: InstallItem, gs: InstallItemGoodView[]) {
    this.id = ii.id;
    this.name = ii.name;
    this.works = ii.works.split(';;');
    this.recommendations = ii.recommendations.split(';;');
    this.asResult = ii.asResult.split(';;');
    this.goods = gs;
  }
}
