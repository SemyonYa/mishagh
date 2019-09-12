import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Category} from '../../models/category';
import {img2ShowAnimation} from '../../app.animations';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  animations: [ img2ShowAnimation ]
})
export class CatalogComponent implements OnInit {
  categories: Category[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.dataService.getCategories().subscribe(
      (data: Category[]) => this.categories = data
    );
  }
}
