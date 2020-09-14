import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  CallingCoopsModalComponent,
  FiremanModalComponent,
  MovimentSensorDetectedModalComponent,
  ThiefCentralAlarmActivatedModalComponent,
  FireModalComponent
} from './components';

@NgModule({
  declarations: [
    MovimentSensorDetectedModalComponent,
    ThiefCentralAlarmActivatedModalComponent,
    FiremanModalComponent,
    CallingCoopsModalComponent,
    FireModalComponent,
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
    MovimentSensorDetectedModalComponent,
    ThiefCentralAlarmActivatedModalComponent,
  ]
})
export class SharedModule { }
