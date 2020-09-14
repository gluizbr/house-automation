import { Injectable } from '@angular/core';
import {
  ThiefCentralAlarmActivatedModalComponent,
  MovimentSensorDetectedModalComponent,
  FiremanModalComponent,
  FireModalComponent,
  CallingCoopsModalComponent
} from '../../../shared/components';
import { MatDialog } from '@angular/material/dialog';
import { TemperatureSensor, MovimentSensor, SmokeSensor } from '../../models/central.model';
import { AlarmState } from '../../enums/alarm-state.enum';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  previousCallingCoopsState: boolean;

  previousFireState: boolean;

  previousFiremanState: boolean;

  previousThiefCentralAlarmState: AlarmState;

  constructor(private modal: MatDialog) { }

  openCallingCoopsModalComponent(callingCoops: boolean): void {
    if (this.previousCallingCoopsState === undefined) {
      this.previousCallingCoopsState = callingCoops;
      return;
    }

    if (this.previousCallingCoopsState !== callingCoops) {
      if (callingCoops) {
        this.modal.open(CallingCoopsModalComponent);
      }

      this.previousCallingCoopsState = callingCoops;
    }
  }

  openFireModalComponent(fire: boolean): void {
    if (this.previousFireState === undefined) {
      this.previousFireState = fire;
      return;
    }

    if (this.previousFireState !== fire) {
      if (fire) {
        this.modal.open(FireModalComponent);
      }

      this.previousFireState = fire;
    }
  }

  openFiremanModalComponent(fireman: boolean): void {
    if (this.previousFiremanState === undefined) {
      this.previousFiremanState = fireman;
      return;
    }

    if (this.previousFiremanState !== fireman) {
      if (fireman) {
        this.modal.open(FiremanModalComponent);
      }

      this.previousFiremanState = fireman;
    }
  }

  openThiefCentralAlarmStateModals(alarmState: AlarmState): void {
    if (this.previousThiefCentralAlarmState === undefined) {
      this.previousThiefCentralAlarmState = alarmState;
      return;
    }

    if (this.previousThiefCentralAlarmState !== alarmState) {
      if (alarmState === AlarmState.Active) {
        this.modal.open(ThiefCentralAlarmActivatedModalComponent);
      } else if (alarmState === AlarmState.DetectedMovement) {
        this.modal.open(MovimentSensorDetectedModalComponent);
      }

      this.previousThiefCentralAlarmState = alarmState;
    }
  }

}
