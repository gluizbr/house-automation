import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private get storage(): Storage {
    return window.localStorage;
  }

  persist(key: StorageKeys, data: string): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  retrieve(key: StorageKeys): string {
    return JSON.parse(this.storage.getItem(key));
  }

  remove(key: StorageKeys): void {
    this.storage.removeItem(key);
  }
}
