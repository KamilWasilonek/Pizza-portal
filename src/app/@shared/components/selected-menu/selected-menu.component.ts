import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-menu',
  templateUrl: './selected-menu.component.html',
  styleUrls: ['./selected-menu.component.scss']
})
export class SelectedMenuComponent implements OnInit {
  menuTypes = {
    pizzas: [
      {
        title: 'Pizza',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/pizza-1.jpg'
      },
      {
        title: 'Pizza',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/pizza-2.jpg'
      },
      {
        title: 'Pizza',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/pizza-3.jpg'
      }
    ],
    drinks: [
      {
        title: 'Drinks',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/drink-1.jpg'
      },
      {
        title: 'Drinks',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/drink-1.jpg'
      },
      {
        title: 'Drinks',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',

        price: '2.90',
        imgSrc: '/assets/images/drink-1.jpg'
      }
    ],
    burgers: [
      {
        title: 'Burgers',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/burger-1.jpg'
      },
      {
        title: 'Burgers',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/burger-1.jpg'
      },
      {
        title: 'Burgers',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/burger-1.jpg'
      }
    ],
    pasta: [
      {
        title: 'Pasta',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/pasta-1.jpg'
      },
      {
        title: 'Pasta',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/pasta-1.jpg'
      },
      {
        title: 'Pasta',
        desc:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        price: '2.90',
        imgSrc: '/assets/images/pasta-1.jpg'
      }
    ]
  };

  isSectionActive = {
    Pizza: true,
    Drinks: false,
    Burgers: false,
    Pasta: false
  };

  activeButtonNum = 0;

  constructor() {}

  ngOnInit() {}

  showItems($event) {
    if ($event.target.nodeName === 'BUTTON') {
      Object.keys(this.isSectionActive).map(item => {
        if (item === $event.target.dataset.type) {
          this.isSectionActive[item] = true;
        } else {
          this.isSectionActive[item] = false;
        }
      });
    }
  }
}
