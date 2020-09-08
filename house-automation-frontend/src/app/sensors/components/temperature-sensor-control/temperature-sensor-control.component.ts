import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TemperatureSensor } from 'src/app/core/models/central.model';
import { SensorsService } from 'src/app/core/services';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-temperature-sensor-control',
  templateUrl: './temperature-sensor-control.component.html',
  styleUrls: ['./temperature-sensor-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemperatureSensorControlComponent {

  @HostBinding('class.app-temperature-sensor-control')
  hostClass = true;

  @Input()
  sensor: TemperatureSensor;

  form: FormGroup;
  temperature = new FormControl();

  constructor(
    private sensorsService: SensorsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      temperature: [
        this.sensor ? this.sensor.temperature : false,
        [ Validators.required ]
      ]
    });
  }

  changeTemperature() {
    if(this.form.valid) {
      this.sensorsService.changeTemperatureSensor(this.sensor.id, this.temperature.value)
      .pipe(take(1))
      .subscribe(
        response => {
          this.sensorsService.showFeedback('Temperatura modificada com sucesso');
          this.replaceSensorData(response);
          console.log(response);
        },
        error => {
          this.sensorsService.showFeedback('Ocorreu um erro interno, tente novamente mais tarde!');
          console.log(error);
        }
      );
    }
  }
  
  replaceSensorData(newData: TemperatureSensor) {
    this.sensor = newData;
  }

}
