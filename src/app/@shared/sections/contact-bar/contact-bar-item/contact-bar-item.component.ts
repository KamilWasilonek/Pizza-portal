import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContactBarItem } from '@app/@shared/models/contact-bar-item.interface';

@Component({
  selector: 'app-contact-bar-item',
  templateUrl: './contact-bar-item.component.html',
  styleUrls: ['./contact-bar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactBarItemComponent {
  @Input() contactItem: ContactBarItem;
}
