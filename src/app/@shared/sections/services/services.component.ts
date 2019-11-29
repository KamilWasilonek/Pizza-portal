import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state(
  //       'show',
  //       style({
  //         opacity: 1,
  //         transform: 'translateX(0)'
  //       })
  //     ),
  //     state(
  //       'hide',
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(-100%)'
  //       })
  //     ),
  //     transition('* => *', animate('1s linear'))
  //   ])
  // ]
})
export class ServicesComponent implements OnInit {
  // @Input() services;
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

  // state = 'hide';

  constructor(public el: ElementRef) {}

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop;
  //   const scrollPosition = window.pageYOffset;

  //   console.log("COM: " + componentPosition);
  //   console.log("SCROLL: " + scrollPosition)
  //   console.log("WINDOWL " + window.innerHeight);

  //   if (scrollPosition >= componentPosition - window.innerHeight + 200) {
  //     this.state = 'show';
  //   } else {
  //     this.state = 'hide';
  //   }
  // }

  ngOnInit() {}
}
