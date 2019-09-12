import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {InstallItem} from '../../models/install-item';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {InstallItemComponent} from '../install-item/install-item.component';
import {fromDownShowAnimation} from '../../app.animations';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css'],
  animations: [ fromDownShowAnimation ]
})
export class InstallComponent implements OnInit {
  installItems: InstallItem[] = [];
  bsModalRef: BsModalRef;
  constructor(private dataService: DataService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.dataService.getInstallItems().subscribe(
      (iis: InstallItem[]) => {
        this.installItems = iis;
        console.log(iis);
      }
    );
  }

  openInstallItemModal(id) {
    const initialState = { id };
    this.bsModalRef = this.modalService.show(InstallItemComponent, {initialState});
  }


}
