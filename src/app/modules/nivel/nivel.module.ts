import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { NivelComponent } from './master-page/nivel.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NivelComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NivelRoutingModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class NivelModule { }
