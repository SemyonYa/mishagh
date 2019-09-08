import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {InstallItem} from '../models/install-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get(this.host + '/categories');
  }

  getGoodGroups() {
    return this.http.get(this.host + '/good-groups');
  }

  getGoods() {
    return this.http.get(this.host + '/goods');
  }

  getInstallItems() {
    return this.http.get(this.host + '/install-items');
  }

  getInstallItem(id: number) {
    return this.http.get(this.host + `/data/install-item?id=${id}`)
      .pipe(map((data: any) => {
        return new InstallItem(data.id, data.name, data.works, data.recommendations, data.as_result);
      }));
  }

  getInstallItemGoods(iiId: number) {
    return this.http.get(this.host + `/data/install-item-goods?iiId=${iiId}`);
  }
}
