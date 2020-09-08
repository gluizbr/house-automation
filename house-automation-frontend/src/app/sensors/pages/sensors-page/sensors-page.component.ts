import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs/operators';
import { Central } from 'src/app/core/models/central.model';
import { CentralService, SensorsService, ModalService } from '../../../core/services';

@Component({
  selector: 'app-sensors-page',
  templateUrl: './sensors-page.component.html',
  styleUrls: ['./sensors-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SensorsPageComponent {

  @HostBinding('class.app-sensors-page')
  hostClass = true;

  central: Central;

  constructor(
    private centralService: CentralService,
    private sensorsService: SensorsService,
    private modalService: ModalService
  ) {
    this.centralService.central$
    .pipe(take(1))
    .subscribe(central => {
      this.central = central;
    })
  }

  activateThiefCentralAlarm() {
    this.sensorsService.activateThiefAlarm()
    .pipe(take(1))
    .subscribe(
      (response) => {
        this.sensorsService.showFeedback('Alarme ativado com sucesso!');
        this.modalService.openThiefCentralAlarmActivatedModal(true);
        this.replaceThiefCentralData(response);
      },
      (error) => {
        this.sensorsService.showFeedback('Ocorreu um erro interno, tente novamente mais tarde!');
        console.log(error);
      }
    );
  }

  replaceThiefCentralData(alarm: { active: boolean }) {
    this.central.thiefCentral.alarm = alarm;
  }
}
