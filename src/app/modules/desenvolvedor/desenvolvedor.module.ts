import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvedorRoutingModule } from './desenvolvedor-routing.module';
import { DesenvolvedorComponent } from './master-page/desenvolvedor.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DesenvolvedorComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesenvolvedorRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class DesenvolvedorModule { }
