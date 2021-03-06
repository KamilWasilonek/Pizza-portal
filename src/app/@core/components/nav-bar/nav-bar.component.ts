import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import {
  map,
  throttleTime,
  pairwise,
  distinctUntilChanged,
  share,
  filter,
  takeUntil
} from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('400ms ease-in'))
    ])
  ]
})
export class NavBarComponent implements OnInit, AfterViewInit {
  isMobileMenuOpen = false;
  isMenuVisible = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(filter(direction => direction === Direction.Up));

    const scrollDown = scroll$.pipe(filter(direction => direction === Direction.Down));

    scrollUp$.pipe(takeUntil(this.destroy$)).subscribe(() => (this.isMenuVisible = true));
    scrollDown.pipe(takeUntil(this.destroy$)).subscribe(() => (this.isMenuVisible = false));
  }

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isMenuVisible
      ? VisibilityState.Visible
      : VisibilityState.Hidden;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }
}
