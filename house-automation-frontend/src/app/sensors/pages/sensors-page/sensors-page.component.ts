import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs/operators';
import { Central } from 'src/app/core/models/central.model';
import { CentralService } from '../../../core/services';

@Component({
  selector: 'app-sensors-page',
  templateUrl: './sensors-page.component.html',
  styleUrls: ['./sensors-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SensorsPageComponent {

  central: Central;

  @HostBinding('class.app-sensors-page')
  hostClass = true;

  constructor(private centralService: CentralService) {
    this.centralService.central$
    .pipe(take(1))
    .subscribe(central => {
      console.log('central');
      this.central = central;
    })
  }
}
