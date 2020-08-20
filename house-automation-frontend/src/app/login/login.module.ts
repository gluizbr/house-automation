import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class LoginModule { }
