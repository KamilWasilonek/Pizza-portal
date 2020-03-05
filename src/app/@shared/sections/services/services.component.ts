import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  
})
export class ServicesComponent implements OnInit {
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

  constructor(public el: ElementRef) {}

  ngOnInit() {}
}
