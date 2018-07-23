import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],

  declarations: [
    HeaderComponent, 
    SidebarComponent, 
    SidebarComponent, 
    SpinnerComponent
  ],
  
  exports: [
    HeaderComponent, 
    SidebarComponent, 
    SpinnerComponent
  ]
})
export class CoreModule { }
