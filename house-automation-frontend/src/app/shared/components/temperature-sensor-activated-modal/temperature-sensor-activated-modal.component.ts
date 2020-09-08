import { Component, Inject, ViewEncapsulation, HostBinding } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemperatureSensor } from 'src/app/core/models/central.model';

@Component({
  selector: 'app-temperature-sensor-activated-modal',
  templateUrl: './temperature-sensor-activated-modal.component.html',
  styleUrls: ['./temperature-sensor-activated-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemperatureSensorActivatedModalComponent {
  @HostBinding('class.app-temperature-sensor-activated-modal')
  hostClass = true;
  
  sensor: TemperatureSensor

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TemperatureSensor
  ) {
    this.sensor = data;
  }

}
