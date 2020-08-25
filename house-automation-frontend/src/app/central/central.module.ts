import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CentralRoutingModule } from './central-routing.module';
import { CentralPageComponent } from './pages/central-page/central-page.component';
import { SharedModule } from '../shared/shared.module';
import { SmokeSensorComponent } from './components/smoke-sensor/smoke-sensor.component';
import { TemperatureSensorComponent } from './components/temperature-sensor/temperature-sensor.component';
import { MovimentSensorComponent } from './components/moviment-sensor/moviment-sensor.component';

@NgModule({
  declarations: [
    CentralPageComponent,
    SmokeSensorComponent,
    TemperatureSensorComponent,
    MovimentSensorComponent
  ],
  imports: [
    CommonModule,
    CentralRoutingModule,
    SharedModule,
  ]
})
export class CentralModule { }
