import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private Colapsed = new Subject<boolean>();

  public _IsColapsed : boolean = false;

  ColapseMenu(){
    this.Colapsed.next(true);
  }

  OpenMenu(){
    this.Colapsed.next(false);
  }

  GetColapesd(){
    return this.Colapsed.asObservable();
  }

  SwitchMenu(){
    this.Colapsed.next(!this._IsColapsed);
  }

  constructor() {
    console.log("nav-service create");
    this.Colapsed.asObservable().subscribe(
      colapsed => this._IsColapsed = colapsed
    );
  }
}
