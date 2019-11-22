import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../@shared/services/service-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  contactItems = [
    { title: "000 (123) 456 7890", description: "A small river named Duden flows", icon: "\f095" },
    { title: "198 West 21th Street", description: "Suite 721 New York NY 10016", icon: "\f095" },
    { title: "Open Monday-Friday", description: "8.00am - 9.00pm", icon: "\f095" }
  ];

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
