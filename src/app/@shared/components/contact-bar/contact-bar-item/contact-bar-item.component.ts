import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-bar-item',
  templateUrl: './contact-bar-item.component.html',
  styleUrls: ['./contact-bar-item.component.scss']
})
export class ContactBarItemComponent implements OnInit {
  @Input() contactItem;

  constructor() { }

  ngOnInit() {
    console.log(this.contactItem);
  }

}
