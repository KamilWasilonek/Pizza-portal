import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-item',
  templateUrl: './pricing-item.component.html',
  styleUrls: ['./pricing-item.component.scss']
})
export class PricingItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
