import { Component } from '@angular/core';
import { faAdjust, faArrowDown, faCoffee, faHome, faQuestionCircle, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { DarkLightService } from 'src/app/shared/services/theme/dark-light.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCoffee = faCoffee;
  faHome = faHome;
  faAdjust = faAdjust;
  faQuestionCircle = faQuestionCircle;
  faArrowDown = faArrowDown;
  faRightToBracket = faRightToBracket;

  constructor(private darkService : DarkLightService) { }

  change(): void {
    this.darkService.changeBodyClass();
  }
}
