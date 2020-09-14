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
  smokeSensors,
  temperatureSensors: [ temperatureSensor ],
  fireman: true,
  fire: true
}

export const thiefCentral = {
  movimentSensors: [ movimentSensor ],
  callingCops: true,
  alarm: { active: true },
  alarmState: null
}

export const central = {
  fireCentral,
  thiefCentral,
}
