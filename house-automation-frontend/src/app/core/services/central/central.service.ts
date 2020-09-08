import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, timer, of } from 'rxjs';
import { catchError, filter, retry, switchMap, takeUntil } from 'rxjs/operators';
import { Environment, environmentProvider } from 'src/environments';
import { Central } from '../../models/central.model';
import { central } from '../../../../assets/fixtures/central.fixture';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class CentralService implements OnDestroy{

  private _central$: Subject<Central> = new Subject();
  get central$(): Observable<Central> {
    return this._central$.asObservable();
  }

  private _loading$: Subject<boolean> = new Subject();
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private stopPooling$: Subject<void> = new Subject();
  timer = timer(0, 1000);

  constructor(
    @Inject(environmentProvider)
    private readonly environment: Environment,
    private readonly http: HttpClient,
    private modalService: ModalService,
  ) {
      this._loading$.next(true);

      this.timer.pipe(
        switchMap(() => this.getInfo()),
        retry(2),
        filter(central => !!central),
        takeUntil(this.stopPooling$),
        catchError((error) => { 
          this.stopPooling();
          this._loading$.next(false);
          return of(central);
          // throw error;
        })
      ).subscribe(
        (central: Central) => {
          this._loading$.next(false);
          this.storeInfo(central);

          central.fireCentral.temperatureSensors
            .forEach(sensor => 
              this.modalService.openTemperatureSensorActivatedModalComponent(sensor)
            );

          central.fireCentral.smokeSensors
            .forEach(sensor =>
              this.modalService.openSmokeSensorActivatedModalComponent(sensor)
            );
          
          central.thiefCentral.movimentSensors
            .forEach(sensor => 
              this.modalService.openMovimentSensorDetectedModalComponent(sensor)
            );
        }
      )
  }

  getInfo(): Observable<Central> {
    return this.http.get<Central>(`${this.environment.url}/api/central`)
  }

  storeInfo (central: Central): void {
    this._central$.next(central);
  }

  stopPooling(): void {
    this.stopPooling$.next();
    this.stopPooling$.complete();
  }

  ngOnDestroy(): void {
    this.stopPooling();
  }
}
