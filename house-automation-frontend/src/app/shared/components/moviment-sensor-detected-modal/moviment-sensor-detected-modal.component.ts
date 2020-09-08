import { Component, OnInit, ViewEncapsulation, Inject, HostBinding } from '@angular/core';
import { SensorsService } from 'src/app/core/services';
import { take } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovimentSensor } from 'src/app/core/models/central.model';

@Component({
  selector: 'app-moviment-sensor-detected-modal',
  templateUrl: './moviment-sensor-detected-modal.component.html',
  styleUrls: ['./moviment-sensor-detected-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovimentSensorDetectedModalComponent {

  @HostBinding('class.app-moviment-sensor-detected-modal')
  hostClass = true;

  sensor: MovimentSensor

  constructor(
    private sensorsService: SensorsService,
    private modalRef: MatDialogRef<MovimentSensorDetectedModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovimentSensor,
  ) {
    this.sensor = data;
  }

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
    );
  }
}
