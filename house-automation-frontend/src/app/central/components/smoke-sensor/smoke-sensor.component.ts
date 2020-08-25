import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { SmokeSensor } from 'src/app/core/models/central.model';

@Component({
  selector: 'app-smoke-sensor',
  templateUrl: './smoke-sensor.component.html',
  styleUrls: ['./smoke-sensor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmokeSensorComponent implements OnInit {
  @HostBinding('class.app-smoke-sensor')
  hostClass = true;

  @HostBinding('class.-active')
  hostClassActive: boolean;

  @Input()
  sensor: SmokeSensor;

  constructor() { }

  ngOnInit(): void {
    this.hostClassActive = this.sensor.active
  }

}
