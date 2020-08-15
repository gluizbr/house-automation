import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./central/central.module').then(m => m.CentralModule)
  },
  {
    path: 'sensores',
    loadChildren: () => import('./sensores/sensores.module').then(m => m.SensoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
