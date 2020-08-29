import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { StorageKeys } from 'src/app/core/enums/storage-keys.enum';
import { AuthenticateResponse } from 'src/app/core/models/authenticate-response.model';
import { AuthenticateService, StorageService } from '../../../core/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent {
  @HostBinding('class.app-login-page')
  hostClass="true";

  form: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private authenticateService: AuthenticateService,
    private storage: StorageService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  login(): void {
    if(this.form.valid) {
      const username = this.username.value;
      const password = this.password.value;

      this.authenticateService.IsLoading();

      this.authenticateService.login(username, password)
        .pipe(take(1))
        .subscribe((response: AuthenticateResponse) => {
          const { token } = response;

          if(!token) {
            // implement error page or error message
            console.log('error');
          }

          const hasTokenStorage = Boolean(this.storage.retrieve(StorageKeys.tokenKey))

          if(hasTokenStorage) {
            this.storage.remove(StorageKeys.tokenKey);
          }

          this.storage.persist(StorageKeys.tokenKey, token);

          this.authenticateService.notLoading();

          this.router.navigate(['']);   
        });
    }
  }

}
