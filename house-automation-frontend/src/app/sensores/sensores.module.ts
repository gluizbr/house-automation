import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SensoresPageComponent } from './pages/sensores-page/sensores-page.component';
import { SensoresRoutingModule } from './sensores-routing.module';
@NgModule({
  declarations: [SensoresPageComponent],
  imports: [
    CommonModule,
    SensoresRoutingModule
  ]
})
export class SensoresModule { }
