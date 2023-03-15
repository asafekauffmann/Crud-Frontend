import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AberturaComponent } from './master-page/abertura.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AberturaRoutingModule } from './abertura-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AberturaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AberturaRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class AberturaModule { }
