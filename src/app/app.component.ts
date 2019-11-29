import { Component } from '@angular/core';
import { fader } from '@app/route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'Pizza';

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'isHomePage';
  }
}
