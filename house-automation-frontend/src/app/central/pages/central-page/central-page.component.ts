import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { catchError, filter, retry, switchMap, takeUntil } from 'rxjs/operators';
import { Central } from 'src/app/core/models/central.model';
import { CentralService } from '../../../core/services/central/central.service';
import { central } from '../../../../assets/fixtures/central.fixture';
@Component({
  selector: 'app-central-page',
  templateUrl: './central-page.component.html',
  styleUrls: ['./central-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CentralPageComponent implements OnInit, OnDestroy {

  @HostBinding('class.app-central-page')
  hostClass = true;

  stopPooling$: Subject<void> = new Subject();
  timer = timer(0, 1000);
  central: Central;

  constructor(private centralService: CentralService) { }

  ngOnInit(): void {
    // this.timer.pipe(
    //   switchMap(() => this.centralService.getInfo()),
    //   retry(2),
    //   filter(central => !!central),
    //   takeUntil(this.stopPooling$),
    //   catchError((error) => { 
    //     this.stopPooling();
    //     throw error;
    //   })
    // ).subscribe(
    //   central => this.central = central,
    // )

    this.central = central;
  }

  stopPooling(): void {
    this.stopPooling$.next();
    this.stopPooling$.complete();
  }

  ngOnDestroy(): void {
    this.stopPooling();
  }
}
