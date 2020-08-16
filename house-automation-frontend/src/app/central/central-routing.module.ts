import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralPageComponent } from './pages/central-page/central-page.component';

const routes: Routes = [
  {
    path: '',
    component: CentralPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralRoutingModule { }
