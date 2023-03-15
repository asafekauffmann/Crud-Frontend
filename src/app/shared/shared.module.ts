import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/estrutura/header/header.component';
import { NavComponent } from './components/estrutura/nav/nav.component';
import { LogoComponent } from './components/estrutura/logo/logo.component';
import { MainComponent } from './components/estrutura/main/main.component';
import { EstruturaGeralComponent } from './components/estrutura/estrutura-geral/estrutura-geral.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    LogoComponent,
    MainComponent,
    EstruturaGeralComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    NavComponent,
    LogoComponent,
    MainComponent,
    EstruturaGeralComponent,
    InputComponent
  ]
})
export class SharedModule { }
