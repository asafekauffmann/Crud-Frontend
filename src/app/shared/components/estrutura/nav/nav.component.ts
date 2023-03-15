import { Component } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navWidthpx = 250;

  constructor(public navService : NavService) {
    this.navService.GetColapesd().subscribe(
      colapsed => {
        this.navWidthpx = colapsed ? 80 : 225;
      }
    )
   }

  ngOnInit(): void {
  }

  recolherMenu(){
    this.navService.ColapseMenu();
  }

}
