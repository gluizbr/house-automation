import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { Environment, environmentProvider } from 'src/environments';
import { MovimentSensor, SmokeSensor, TemperatureSensor } from '../../models/central.model';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private _loading$ = new Subject<boolean>();
  get loading$(): Observable<Boolean> {
    return this._loading$.asObservable();
  }

  constructor(
    @Inject(environmentProvider)
    private readonly environment: Environment,
    private readonly http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  activateThiefAlarm(): Observable<{ active: boolean }> {
    return this.http.put<{ active: boolean }>(`${this.environment.url}/api/thief/alarm/activate`, {});
  }

  deactivateThiefAlarm(): Observable<{ active: boolean }> {
    return this.http.put<{ active: boolean }>(`${this.environment.url}/api/thief/alarm/deactivate`, {});
  }

  changeMovimentSensorState(sensorId: string): Observable<MovimentSensor> {
    return this.http.put<MovimentSensor>(`${this.environment.url}/api/thief/moviment/${sensorId}`, {});
  }

  changeSmokeSensorState(sensorId: string, active: boolean): Observable<SmokeSensor> {
    return this.http.put<SmokeSensor>(`${this.environment.url}/api/fire/smoke/${sensorId}?active=${active}`, {});
  }

  changeTemperatureSensor(sensorId: string, temperature: number): Observable<TemperatureSensor> {
    return this.http.put<TemperatureSensor>(`${this.environment.url}/api/fire/temperature/${sensorId}?temperature=${temperature}`, {});
  }

  IsLoading() {
    this._loading$.next(true);
  }

  notLoading() {
    this._loading$.next(false);
  }

  showFeedback(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
