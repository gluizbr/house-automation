import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CentralRoutingModule } from './central-routing.module';
import { CentralPageComponent } from './pages/central-page/central-page.component';

@NgModule({
  declarations: [CentralPageComponent],
  imports: [
    CommonModule,
    CentralRoutingModule
  ]
})
export class CentralModule { }
