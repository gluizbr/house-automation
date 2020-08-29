import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject, timer } from 'rxjs';
import { catchError, filter, retry, switchMap, takeUntil } from 'rxjs/operators';
import { Environment, environmentProvider } from 'src/environments';
import { Central } from '../../models/central.model';
import { central } from 'src/assets/fixtures/central.fixture';

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
    private readonly http: HttpClient
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
          // return of(central);
          throw error;
        })
      ).subscribe(
        (central: Central) => {
          this._loading$.next(false);
          this.storeInfo(central);
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
