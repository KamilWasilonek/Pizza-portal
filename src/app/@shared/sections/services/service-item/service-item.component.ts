import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceItemComponent implements OnInit {
  @Input() service;

  src = '/assets/icons/diet.svg';

  constructor() {}

  ngOnInit() {}
}
