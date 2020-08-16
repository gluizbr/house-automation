import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensoresPageComponent } from './pages/sensores-page/sensores-page.component';

const routes: Routes = [
  {
    path: '',
    component: SensoresPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensoresRoutingModule { }
