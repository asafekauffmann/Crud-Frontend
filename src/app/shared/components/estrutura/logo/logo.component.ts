import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NavService } from 'src/app/shared/services/nav/nav.service';

const WIDTH_IMG_LOGO : number = 100;
const WIDTH_IMG_LOGO_O : number = 35;
const URL_LOGO_OFICIAL : string = "../../../../../assets/logo/DevDash.png";
const URL_LOGO_O : string = "../../../../../assets/logo/logo.png";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  urlImagem$ = new Subject<string>();
  imgWidth$ = new Subject<number>();

  urlImagem : string = URL_LOGO_OFICIAL;
  imgWidth : number = WIDTH_IMG_LOGO;

  constructor(public navService : NavService) {
    this.urlImagem$.asObservable().subscribe(
      url => this.urlImagem = url
    )

    this.imgWidth$.asObservable().subscribe(
      width => this.imgWidth = width
    )

    this.navService.GetColapesd().subscribe(
      () => {
        this.urlImagem$.next(this.navService._IsColapsed ? URL_LOGO_O : URL_LOGO_OFICIAL);
        this.imgWidth$.next(this.navService._IsColapsed ? WIDTH_IMG_LOGO_O : WIDTH_IMG_LOGO);
      }
    )
  }

  ngOnInit(): void {
  }

  SwitchMenu(){
    this.navService.SwitchMenu();
  }

}
