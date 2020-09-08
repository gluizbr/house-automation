import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MovimentSensorDetectedModalComponent, TemperatureSensorActivatedModalComponent, ThiefCentralAlarmActivatedModalComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { SmokeSensorActivatedModalComponent } from './components/smoke-sensor-activated-modal/smoke-sensor-activated-modal.component';

@NgModule({
  declarations: [
    TemperatureSensorActivatedModalComponent, 
    MovimentSensorDetectedModalComponent, 
    ThiefCentralAlarmActivatedModalComponent, SmokeSensorActivatedModalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    TemperatureSensorActivatedModalComponent, 
    MovimentSensorDetectedModalComponent, 
    ThiefCentralAlarmActivatedModalComponent,
  ]
})
export class SharedModule { }
