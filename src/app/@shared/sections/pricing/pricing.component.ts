import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  items = [
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
    {
      imgSrc: '/assets/images/pizza-1.jpg',
      title: 'italian pizza',
      desc: 'A small river named Duden flows by their place and supplies',
      price: '20'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
