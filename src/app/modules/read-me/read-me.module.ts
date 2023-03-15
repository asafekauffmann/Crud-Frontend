import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMeRoutingModule } from './read-me-routing.module';
import { ReadMeComponent } from './master-page/read.me.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ReadMeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadMeRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ReadMeModule { }
