import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMenuItemsComponent } from './selected-menu-items.component';

describe('SelectedMenuItemsComponent', () => {
  let component: SelectedMenuItemsComponent;
  let fixture: ComponentFixture<SelectedMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
