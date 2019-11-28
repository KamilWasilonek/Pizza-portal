import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatedIconComponent } from './rotated-icon.component';

describe('RotatedIconComponent', () => {
  let component: RotatedIconComponent;
  let fixture: ComponentFixture<RotatedIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatedIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
