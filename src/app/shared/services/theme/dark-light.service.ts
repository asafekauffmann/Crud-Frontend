import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

const INDEX_THEME_LIGHT = 1;

@Injectable({
  providedIn: 'root'
})
export class DarkLightService {

  availableClasses: string[] = ["dark", "light"];
  currentClassIdx: number = INDEX_THEME_LIGHT; //Iniciar com Light
  bodyClass: string = "";

  constructor(public serviceLocal : LocalStorageService) {
    console.log("dark-ligth service create");
    this.CarregarTema();
    this.IniciarTema();
  }

  CarregarTema() {
    const theme = this.serviceLocal.getString("theme");
    if (theme !== null) {
      this.bodyClass = theme;
    } else {
      this.bodyClass = this.availableClasses[INDEX_THEME_LIGHT];
      this.serviceLocal.setString("theme",this.bodyClass);
    }
    this.currentClassIdx = this.availableClasses.indexOf(this.bodyClass);
  }

  IniciarTema() {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.add(this.bodyClass);
    }
  }

  changeBodyClass() {
    const bodyElement = document.body;

    if (bodyElement) {
      const nextClass = this.availableClasses[this.getNextClassIdx()];
      const activeClass = this.availableClasses[this.currentClassIdx];

      bodyElement.classList.remove(activeClass);
      bodyElement.classList.add(nextClass);

      this.bodyClass = nextClass;

      this.currentClassIdx = this.availableClasses.indexOf(this.bodyClass);
      this.serviceLocal.setString("theme",this.bodyClass);
    }
  }

  getNextClassIdx(): number {
    return this.currentClassIdx === this.availableClasses.length - 1
      ? 0
      : this.currentClassIdx + 1;
  }
}
