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
      console.log(central);
      this.central = central;
    })
  }

  changeThiefCentralAlarmState(active: boolean) {
    if (active) {
      this.sensorsService.deactivateThiefAlarm()
        .pipe(take(1))
        .subscribe(
          (response) => {
            this.sensorsService.showFeedback('Alarme desativado com sucesso!');

            // this.modalService.openThiefCentralAlarmActivatedModal(true);

            if (response) {
              this.replaceThiefCentralData(response);
            }

            console.log(response);
          },
          (error) => {
            this.sensorsService.showFeedback('Ocorreu um erro interno, tente novamente mais tarde!');
            console.log(error);
          }
        );
    } else {
      this.sensorsService.activateThiefAlarm()
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.sensorsService.showFeedback('Alarme ativado com sucesso!');

          // this.modalService.openThiefCentralAlarmActivatedModal(true);

          if (response) {
            this.replaceThiefCentralData(response);
          }

          console.log(response);
        },
        (error) => {
          this.sensorsService.showFeedback('Ocorreu um erro interno, tente novamente mais tarde!');
          console.log(error);
        }
      );
    }
  }

  replaceThiefCentralData(alarm: { active: boolean }) {
    this.central.thiefCentral.alarm = alarm;
  }
}
