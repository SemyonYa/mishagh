import {Component, OnInit} from '@angular/core';
import {imgShowAnimation} from '../../app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ imgShowAnimation ]
})
export class HomeComponent implements OnInit {

  slides = [
    {image: 'assets/img/bmw-01.jpg'},
    {image: 'assets/img/bmw-02.jpg'},
    {image: 'assets/img/bmw-03.jpg'},
    {image: 'assets/img/bmw-01.jpg'}
    // {image: 'assets/img/bmw-02.jpg'},
    // {image: 'assets/img/bmw-03.jpg'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
