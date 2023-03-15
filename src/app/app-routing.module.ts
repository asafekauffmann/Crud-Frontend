import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'abertura',
    loadChildren: () => import('./modules/abertura/abertura.module').then(m => m.AberturaModule)
  },
  {
    path: 'desenvolvedor',
    loadChildren: () => import('./modules/desenvolvedor/desenvolvedor.module').then(m => m.DesenvolvedorModule)
  },
  {
    path: 'nivel',
    loadChildren: () => import('./modules/nivel/nivel.module').then(m => m.NivelModule)
  },
  {
    path: 'read-me',
    loadChildren: () => import('./modules/read-me/read-me.module').then(m => m.ReadMeModule)
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
