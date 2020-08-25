import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Central } from '../../models/central.model';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  constructor(private readonly http: HttpClient) { }

  url = 'https://6135f1ce0493.ngrok.io';
  
  getInfo(): Observable<Central> {
    return this.http.get<Central>(`${this.url}/api/central`);
  }
}
