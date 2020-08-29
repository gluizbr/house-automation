import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TemperatureSensorActivatedModalComponent } from './components/temperature-sensor-activated-modal/temperature-sensor-activated-modal.component';

@NgModule({
  declarations: [TemperatureSensorActivatedModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
