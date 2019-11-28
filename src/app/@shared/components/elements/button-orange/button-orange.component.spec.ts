import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOrangeComponent } from './button-orange.component';

describe('ButtonOrangeComponent', () => {
  let component: ButtonOrangeComponent;
  let fixture: ComponentFixture<ButtonOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
