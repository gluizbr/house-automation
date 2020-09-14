import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Central } from 'src/app/core/models/central.model';
import { CentralService } from '../../../core/services';
import { AlarmState } from '../../../core/enums/alarm-state.enum';

@Component({
  selector: 'app-central-page',
  templateUrl: './central-page.component.html',
  styleUrls: ['./central-page.component.scss', './sensors-list.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CentralPageComponent {

  @HostBinding('class.app-central-page')
  hostClass = true;

  central$: Observable<Central>;

  alarmStateEnum = AlarmState;

  constructor(private centralService: CentralService) {
    this.central$ = this.centralService.central$;
  }
}
