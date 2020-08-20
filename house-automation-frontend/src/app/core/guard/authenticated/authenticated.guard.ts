import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageKeys } from '../../enums/storage-keys.enum';
import { StorageService } from '../../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {
  constructor(
    private storage: StorageService,
    private router: Router,
  ) { }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.storage.retrieve(StorageKeys.tokenKey);

    if(!token) {
      return this.router.createUrlTree(['/login']);
    }
    
    return true;
  }
  
}
