import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionInfoComponent implements OnInit {
  @Input() sectionName: string;

  constructor() { }

  ngOnInit() {
  }

}
