import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pricing-item',
  templateUrl: './pricing-item.component.html',
  styleUrls: ['./pricing-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingItemComponent {
  @Input() item;
}
