import { AlarmState } from "../../app/core/enums/alarm-state.enum";

export const smokeSensors = [
  {
    id: '123456412',
    name: 'Cozinha',
    lastEventTime: new Date(),
    active: false
  },
  {
    id: '123456413',
    name: 'Sala',
    lastEventTime: new Date(),
    active: true
  }
];

export const temperatureSensor = {
  id: '123456412',
  name: 'Quarto',
  temperature: 25
};

export const movimentSensor = {
  id: '123456412',
  name: 'Porta principal',
  lastEventTime: new Date(),
}

export const fireCentral = {
  smokeSensors: smokeSensors,
  temperatureSensors: [ temperatureSensor ],
  fireman: false,
  fire: false
}

export const thiefCentral = {
  movimentSensors: [ movimentSensor ],
  callingCops: false,
  alarm: { active: true },
  alarmState: AlarmState.Inactive
}

export const central = {
  fireCentral,
  thiefCentral,
}


