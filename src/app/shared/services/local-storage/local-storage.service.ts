import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  isSuported(){
    if (this.storage) return true;
    return false;
  }

  setString(key: string, value: string) {
    if(this.isSuported()) this.storage.setItem(key, value);
  }

  setObject(key: string, value: any) {
    if(value)
      if(this.isSuported()) this.storage.setItem(key, JSON.stringify(value));
  }

  getString(key: string) : string | null {
    if (this.isSuported()) {
      return this.storage.getItem(key);
    }
    return null;
  }

  getObject(key: string) : any {
    if (this.isSuported()) {
      var localStorage = this.storage.getItem(key);
      if(localStorage && localStorage != "null"  && localStorage != "undefined" ) return JSON.parse(localStorage);
      return null;
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.isSuported()) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.isSuported()) {
      this.storage.clear();
      return true;
    }
    return false;
  }

}
