import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBarItemComponent } from './contact-bar-item.component';

describe('ContactBarItemComponent', () => {
  let component: ContactBarItemComponent;
  let fixture: ComponentFixture<ContactBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
