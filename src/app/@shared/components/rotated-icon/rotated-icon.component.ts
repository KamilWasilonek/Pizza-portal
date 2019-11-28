import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rotated-icon',
  templateUrl: './rotated-icon.component.html',
  styleUrls: ['./rotated-icon.component.scss']
})
export class RotatedIconComponent implements OnInit {

  @Input() iconSrc;

  constructor() { }

  ngOnInit() {
  }

}
