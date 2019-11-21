import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../@shared/services/service-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  services = [
    {
      imgSrc: 'assets/icons/diet.png',
      title: 'HEALTHY FOODS',
      desc:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
      imgSrc: 'assets/icons/stopwatch.png',
      title: 'HEALTHY FOODS',
      desc:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
      imgSrc: 'assets/icons/stopwatch.png',
      title: 'HEALTHY FOODS',
      desc:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
