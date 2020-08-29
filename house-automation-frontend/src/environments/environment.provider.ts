import { InjectionToken } from '@angular/core';
import { environment } from "./environment";

export const environmentProvider = new InjectionToken<any>('Environment', {
  providedIn: 'root',
  factory: () => environment 
})