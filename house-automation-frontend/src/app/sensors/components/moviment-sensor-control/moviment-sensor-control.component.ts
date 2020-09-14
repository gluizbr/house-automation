import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MovimentSensor } from 'src/app/core/models/central.model';
import { SensorsService } from 'src/app/core/services';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moviment-sensor-control',
  templateUrl: './moviment-sensor-control.component.html',
  styleUrls: ['./moviment-sensor-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovimentSensorControlComponent {
  @HostBinding('class.app-moviment-sensor-control')
  hostClass = true;

  @Input()
  sensor: MovimentSensor;

  constructor(
    private sensorsService: SensorsService,
  ) { }

  changeMovimentSensor() {
    this.sensorsService.changeMovimentSensorState(this.sensor.id)
    .pipe(take(1))
    .subscribe(
      response => {
        this.sensorsService.showFeedback('Sensor de movimento modificado com sucesso!');

        if (response) {
          this.replaceSensorData(response);
        }

        console.log(response);
      },
      error => {
        this.sensorsService.showFeedback('Ocorreu um erro interno, tente novamente mais tarde!');
        console.log(error);
      }
    );
  }

  replaceSensorData(newData: MovimentSensor) {
    this.sensor = newData;
  }
}
