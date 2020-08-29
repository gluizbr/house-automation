import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @HostBinding('class.app-root')
  hostClass = true;

  loading$: Observable<boolean>;

  title = 'house-automation-frontend';

  constructor(
    private authenticateService: AuthenticateService,
  ) {
    this.loading$ = this.authenticateService.loading$;
  }
}
