import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems = [
    {
      imgSrc: '../../../../assets/images/pizza-1.jpg',
      title: 'Italian Pizza',
      desc:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
      price: '2.90'
    },
    {
      imgSrc: '../../../../assets/images/pizza-1.jpg',
      title: 'Italian Pizza',
      desc:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
      price: '2.90'
    },
    {
      imgSrc: '../../../../assets/images/pizza-1.jpg',
      title: 'Italian Pizza',
      desc:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
      price: '2.90'
    },
    {
      imgSrc: '../../../../assets/images/pizza-1.jpg',
      title: 'Italian Pizza',
      desc:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
      price: '2.90'
    },
    {
      imgSrc: '../../../../assets/images/pizza-1.jpg',
      title: 'Italian Pizza',
      desc:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
      price: '2.90'
    },
    {
      imgSrc: '../../../../assets/images/pizza-1.jpg',
      title: 'Italian Pizza',
      desc:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
      price: '2.90'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
