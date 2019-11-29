import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-menu-items',
  templateUrl: './selected-menu-items.component.html',
  styleUrls: ['./selected-menu-items.component.scss']
})
export class SelectedMenuItemsComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
