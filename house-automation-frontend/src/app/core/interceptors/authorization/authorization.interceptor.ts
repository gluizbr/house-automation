import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageKeys } from '../../enums/storage-keys.enum';
import { StorageService } from '../../services/storage/storage.service';

export enum HttpError {
  Unauthorized = 401
}

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthorizationToken(request))
  }

  addAuthorizationToken(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.storage.retrieve(StorageKeys.tokenKey);

    if(!accessToken) {
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  }
}
