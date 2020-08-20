import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateResponse } from '../../models/authenticate-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  url = 'https://d0d51ec69e60.ngrok.io/api';
  
  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string): Observable<AuthenticateResponse> {
    const body = { username, password };
    
    return this.http.post<AuthenticateResponse>(`${this.url}/authenticate`, body);
  }
}
