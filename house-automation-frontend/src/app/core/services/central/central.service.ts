import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, Subject, timer } from 'rxjs';
import { catchError, delayWhen, filter, retryWhen, switchMap, takeUntil } from 'rxjs/operators';
import { Environment, environmentProvider } from 'src/environments';
import { central } from '../../../../assets/fixtures/central.fixture';
import { Central } from '../../models/central.model';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  private _central$: Subject<Central> = new Subject();
  get central$(): Observable<Central> {
    return this._central$.asObservable();
  }

  private _loading$: Subject<boolean> = new Subject();
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private stopPooling$: Subject<void> = new Subject();
  timer = timer(0, 7000);

  constructor(
    @Inject(environmentProvider)
    private readonly environment: Environment,
    private readonly http: HttpClient,
    private modalService: ModalService,
  ) {
      this._loading$.next(true);

      this.timer.pipe(
        switchMap(() => this.getInfo()),
        retryWhen(errors =>
          errors.pipe(delayWhen(() => timer(60000)))
        ),
        filter(central => !!central),
        takeUntil(this.stopPooling$),
        catchError((error) => {
          this.stopPooling();
          this._loading$.next(false);
          throw error;
        })
      ).subscribe(
        (central: Central) => {
          this._loading$.next(false);
          console.log('central', central);
          this.storeInfo(central);

          this.modalService.openCallingCoopsModalComponent(central.thiefCentral.callingCops);

          this.modalService.openFireModalComponent(central.fireCentral.fire);

          this.modalService.openFiremanModalComponent(central.fireCentral.fireman);

          this.modalService.openThiefCentralAlarmStateModals(central.thiefCentral.alarmState);
        }
      );
  }

  getInfo(): Observable<Central> {
    return this.http.get<Central>(`${this.environment.url}/api/central`);
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
