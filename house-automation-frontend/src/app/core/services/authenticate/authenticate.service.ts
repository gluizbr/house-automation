import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateResponse } from '../../models/authenticate-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  url = 'https://6135f1ce0493.ngrok.io';
  
  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string): Observable<AuthenticateResponse> {
    const body = { username, password };
    
    return this.http.post<AuthenticateResponse>(`${this.url}/api/authenticate`, body);
  }
}
