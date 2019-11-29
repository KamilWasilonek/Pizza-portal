import {
  trigger,
  transition,
  query,
  style,
  animate,
  animateChild,
  group
} from '@angular/animations';

export const fader = trigger('animRoutes', [
  transition('* <=> *', [
    group([
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateY(-7rem) '
          }),
          animate(
            '0.7s cubic-bezier(0, 1.2, 1, 1.2)',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
          animateChild()
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [animate('0.5s', style({ opacity: 0 })), animateChild()],
        { optional: true }
      )
    ])
  ])
]);
