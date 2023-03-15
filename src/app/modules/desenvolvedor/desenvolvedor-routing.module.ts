import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesenvolvedorComponent } from './master-page/desenvolvedor.component';

const routes: Routes = [
  {
    path: '',
    component: DesenvolvedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesenvolvedorRoutingModule { }
