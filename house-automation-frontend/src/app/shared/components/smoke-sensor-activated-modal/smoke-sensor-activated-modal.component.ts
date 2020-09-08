import { Component, OnInit, Inject, HostBinding, ViewEncapsulation } from '@angular/core';
import { SmokeSensor } from 'src/app/core/models/central.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-smoke-sensor-activated-modal',
  templateUrl: './smoke-sensor-activated-modal.component.html',
  styleUrls: ['./smoke-sensor-activated-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmokeSensorActivatedModalComponent {
  @HostBinding('class.app-smoke-sensor-activated-modal')
  hostClass = true;
  
  sensor: SmokeSensor

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SmokeSensor
  ) {
    this.sensor = data;
  }

}
