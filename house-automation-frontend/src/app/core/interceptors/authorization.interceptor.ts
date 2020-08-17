import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthorizationToken(request));
  }

  addAuthorizationToken(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.storage.retrieve(StorageKeys.tokenKey);

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`;
      }
    })
  }
}
