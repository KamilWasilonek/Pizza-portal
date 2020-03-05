import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-selected-menu-items',
  templateUrl: './selected-menu-items.component.html',
  styleUrls: ['./selected-menu-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedMenuItemsComponent {
  @Input() items;
}
