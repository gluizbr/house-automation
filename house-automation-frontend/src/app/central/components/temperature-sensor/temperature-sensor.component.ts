import { Component, Input, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { TemperatureSensor } from 'src/app/core/models/central.model';

@Component({
  selector: 'app-temperature-sensor',
  templateUrl: './temperature-sensor.component.html',
  styleUrls: ['./temperature-sensor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemperatureSensorComponent implements OnInit {

  @HostBinding('class.app-temperature-sensor')
  hostClass = true;

  @Input()
  sensor: TemperatureSensor;

  constructor() { }

  ngOnInit(): void {
  }

}
