import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './core/guard/authenticated/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canLoad: [ AuthenticatedGuard ],
    loadChildren: () => import('./central/central.module').then(m => m.CentralModule)
  },
  {
    path: 'sensores',
    canLoad: [ AuthenticatedGuard ],
    loadChildren: () => import('./sensors/sensors.module').then(m => m.SensorsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
