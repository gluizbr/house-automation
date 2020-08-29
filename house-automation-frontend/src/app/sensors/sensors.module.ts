import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from '../shared/shared.module';
import { MovimentSensorControlComponent } from './components/moviment-sensor-control/moviment-sensor-control.component';
import { SmokeSensorControlComponent } from './components/smoke-sensor-control/smoke-sensor-control.component';
import { TemperatureSensorControlComponent } from './components/temperature-sensor-control/temperature-sensor-control.component';
import { SensorsPageComponent } from './pages/sensors-page/sensors-page.component';
import { SensorsRoutingModule } from './sensors-routing.module';


@NgModule({
  declarations: [ SensorsPageComponent, MovimentSensorControlComponent, SmokeSensorControlComponent, TemperatureSensorControlComponent ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSlideToggleModule
  ]
})
export class SensorsModule { }
