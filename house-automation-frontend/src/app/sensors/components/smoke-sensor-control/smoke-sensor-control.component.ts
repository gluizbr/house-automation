import { Component, HostBinding, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { SmokeSensor } from 'src/app/core/models/central.model';
import { SensorsService } from 'src/app/core/services';

@Component({
  selector: 'app-smoke-sensor-control',
  templateUrl: './smoke-sensor-control.component.html',
  styleUrls: ['./smoke-sensor-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmokeSensorControlComponent implements OnInit {

  @HostBinding('class.app-smoke-sensor-control')
  hostClass = true;

  @Input()
  sensor: SmokeSensor;

  form: FormGroup;
  control: FormControl;

  constructor(
    private sensorsService: SensorsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('')

    this.control = new FormControl(
      this.sensor ? this.sensor.active : false, 
      [ Validators.required ]
    );

    this.form = this.fb.group({
      control: this.control,
    });
  }

  changeSmokeSensorAlarm() {
    this.sensorsService.changeSmokeSensorState(this.sensor.id, this.control.value)
    .pipe(take(1))
    .subscribe(
      response => {
        this.sensorsService.showFeedback(`Alarme ${this.control.value ? 'ativado' : 'desativado'} com sucesso`);

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

  replaceSensorData(newData: SmokeSensor) {
    this.sensor = newData;
  }
}
