import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsPageComponent } from './pages/sensors-page/sensors-page.component';

const routes: Routes = [
  {
    path: '',
    component: SensorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule { }
