import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { CentralRoutingModule } from './central-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { MovimentSensorComponent } from './components/moviment-sensor/moviment-sensor.component';
import { SmokeSensorComponent } from './components/smoke-sensor/smoke-sensor.component';
import { TemperatureSensorComponent } from './components/temperature-sensor/temperature-sensor.component';
import { CentralPageComponent } from './pages/central-page/central-page.component';

@NgModule({
  declarations: [
    CentralPageComponent,
    SmokeSensorComponent,
    TemperatureSensorComponent,
    MovimentSensorComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    CentralRoutingModule,
    SharedModule,
    MatIconModule,
    HttpClientModule,
  ]
})
export class CentralModule { }
