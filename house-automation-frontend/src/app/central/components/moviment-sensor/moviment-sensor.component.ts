import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { MovimentSensor } from 'src/app/core/models/central.model';

@Component({
  selector: 'app-moviment-sensor',
  templateUrl: './moviment-sensor.component.html',
  styleUrls: ['./moviment-sensor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovimentSensorComponent implements OnInit {

  @HostBinding('class.app-moviment-sensor')
  hostClass = true;

  @Input()
  sensor: MovimentSensor;

  constructor() { }

  ngOnInit(): void {
  }
}
