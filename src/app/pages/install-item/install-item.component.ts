import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {InstallItem} from '../../models/install-item';
import {InstallItemView} from '../../models/view/install-item-view';
import {Good} from '../../models/good';
import {GoodView} from '../../models/view/good-view';
import {InstallItemGoodView} from '../../models/view/install-item-good-view';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-install-item',
  templateUrl: './install-item.component.html',
  styleUrls: ['./install-item.component.css']
})
export class InstallItemComponent implements OnInit {
  id: number;
  installItemView: InstallItemView = null;

  constructor(private dataService: DataService, public bsModalRef: BsModalRef) {
  }

  ngOnInit() {

    this.dataService.getInstallItem(this.id).subscribe(
      (ii: InstallItem) => {
        this.dataService.getInstallItemGoods(this.id).subscribe(
          (gs: InstallItemGoodView[]) => {
            this.installItemView = new InstallItemView(ii, gs);
          }
        );
      }
    );
  }

  toCart(id, q) {
    alert(id + ' To Cart - ' + q);
  }

  goToCategory(catId) {
    alert('Go To Category ' + catId);
    console.log(catId);
  }

}
