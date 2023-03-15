import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputGenericoService {

  private IsInvalid$ = new Subject<boolean>();

  getIsInvalid() : Observable<boolean> {
    return this.IsInvalid$.asObservable();
  }

  setIsInvalid(IsInvalid : boolean){
    this.IsInvalid$.next(IsInvalid);
  }

  constructor() {
    console.log("InputGenericService create");
   }
}
