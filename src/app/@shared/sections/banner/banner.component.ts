import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  imgSrc = '../../../../assets/images/bg_1.jpg';
  counter = 1;

  constructor() {}

  ngOnInit() {
    // setInterval(() => {
    //   if(this.counter === 3) {
    //     this.counter =  1;
    //   }
    //   this.counter++;
    //   // console.log(this.counter);
    // },4000);
  }
}
