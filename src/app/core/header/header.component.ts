import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { fromEvent} from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

enum VisibilityState {
  Visible = 'Visible',
  Hidden = 'Hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)'})
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)'})
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private isVisible: Boolean = true;
  constructor() { }

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => y2 < y1 ? Direction.Up : Direction.Down),
      distinctUntilChanged(), // Only emit event, when the values change.
      share() // Avoid creating multiple subscription.
    )

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => this.isVisible = true);
    scrollDown$.subscribe(() => this.isVisible = false);

  }

}
