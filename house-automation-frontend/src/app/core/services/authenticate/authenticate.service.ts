import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Environment, environmentProvider } from 'src/environments';
import { AuthenticateResponse } from '../../models/authenticate-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  private _loading$ = new Subject<boolean>();
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  constructor(
    @Inject(environmentProvider)
    private readonly environment: Environment,
    private readonly http: HttpClient
  ) { }

  login(username: string, password: string): Observable<AuthenticateResponse> {
    const body = { username, password };
    
    return this.http.post<AuthenticateResponse>(`${this.environment.url}/api/authenticate`, body);
  }

  IsLoading() {
    this._loading$.next(true);
  }

  notLoading() {
    this._loading$.next(false);
  }
}
