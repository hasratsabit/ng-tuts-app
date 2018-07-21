import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent]
})
export class CoreModule { }
