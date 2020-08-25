import { AlarmState } from "../enums/alarm-state.enum";

export interface Central {
  fireCentral: FireCentral;
  thiefCentral: ThiefCentral;
}

export interface FireCentral {
  smokeSensors: SmokeSensor[];
  temperatureSensors: TemperatureSensor[];
  fireman: boolean;
  fire: boolean;
}

export interface SmokeSensor {
  id: string;
  name: string;
  lastEventTime: Date;
  active: boolean;
}

export interface TemperatureSensor {
  id: string;
  name: string;
  temperature: number;
}

export interface ThiefCentral {
  movimentSensors: MovimentSensor[];
  callingCops: boolean;
  alarm: { active: boolean };
  alarmState: AlarmState;
}

export interface MovimentSensor {
  id: string;
  name: string;
  lastEventTime: Date;
}
