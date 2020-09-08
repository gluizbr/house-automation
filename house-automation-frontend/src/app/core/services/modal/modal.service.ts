import { Injectable } from '@angular/core';
import { ThiefCentralAlarmActivatedModalComponent, TemperatureSensorActivatedModalComponent, MovimentSensorDetectedModalComponent } from 'src/app/shared/components';
import { SmokeSensorActivatedModalComponent } from 'src/app/shared/components/smoke-sensor-activated-modal/smoke-sensor-activated-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TemperatureSensor, MovimentSensor, SmokeSensor } from '../../models/central.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  previousMovimentSensorDetectedState: { [key: string]: Date };

  previousSmokeSensorActivatedState: { [key: string]: boolean };

  previousTemperatureSensorActivatedState: { [key: string]: number };

  previousThiefCentralAlarmActivatedState: boolean;

  constructor(private modal: MatDialog) { }

  openMovimentSensorDetectedModalComponent(movimentSensor: MovimentSensor): void {
    const previousState = this.previousMovimentSensorDetectedState[movimentSensor.id];

    if(previousState !== movimentSensor.lastEventTime) {
      this.modal.open(MovimentSensorDetectedModalComponent, {
        data: movimentSensor
      });

      this.previousMovimentSensorDetectedState[movimentSensor.id] = movimentSensor.lastEventTime;
    }

  }

  openSmokeSensorActivatedModalComponent(smokeSensor: SmokeSensor): void {
    const previousState = this.previousSmokeSensorActivatedState[smokeSensor.id];

    if(previousState !== smokeSensor.active) {
      this.modal.open(SmokeSensorActivatedModalComponent, {
        data: smokeSensor
      });

      this.previousSmokeSensorActivatedState[smokeSensor.id] = smokeSensor.active;
    }

  }

  openTemperatureSensorActivatedModalComponent(temperatureSensor: TemperatureSensor): void {
    const previousState = this.previousTemperatureSensorActivatedState[temperatureSensor.id];

    if(previousState !== temperatureSensor.temperature) {
      this.modal.open(TemperatureSensorActivatedModalComponent, {
        data: temperatureSensor
      });

      this.previousTemperatureSensorActivatedState[temperatureSensor.id] = temperatureSensor.temperature;
    }
  }

  openThiefCentralAlarmActivatedModal(thiefCentralAlarm: boolean): void {
    if(this.previousThiefCentralAlarmActivatedState !== thiefCentralAlarm) {
      this.modal.open(ThiefCentralAlarmActivatedModalComponent);

      this.previousThiefCentralAlarmActivatedState = thiefCentralAlarm;
    }
  }

}
