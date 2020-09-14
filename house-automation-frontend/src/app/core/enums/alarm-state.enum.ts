export enum AlarmState {
  Active = 'ACTIVE', //alarme disparado
  DetectedMovement = 'DETECTED_MOVEMENT', // Caso o alarme não for desativado dentro dos proximos segundos o alarme sera disparado
}
