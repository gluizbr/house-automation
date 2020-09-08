import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { SensorsService } from '../../../core/services/sensors/sensors.service';

@Component({
  selector: 'app-thief-central-alarm-activated-modal',
  templateUrl: './thief-central-alarm-activated-modal.component.html',
  styleUrls: ['./thief-central-alarm-activated-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThiefCentralAlarmActivatedModalComponent {

  @HostBinding('class.app-thief-central-alarm-activated-modal')
  hostClass = true;
  
  constructor(
    private sensorsService: SensorsService,
    private modalRef: MatDialogRef<ThiefCentralAlarmActivatedModalComponent>,
  ) { }

  deactivateAlarm(): void {
    this.sensorsService.deactivateThiefAlarm()
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.sensorsService.showFeedback('Alarme desativado com sucesso!');
          console.log(response);
        },
        (error) => {
          this.sensorsService.showFeedback('Ocorreu um erro interno, tente novamente mais tarde!');
          console.log(error);
        },
        () => {
          this.modalRef.close();
        }
      )
  }
}
