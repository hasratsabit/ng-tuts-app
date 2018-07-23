import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ElementsComponent } from './elements/elements.component';
import { HashpasswordDirective } from './directives/hashpassword.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  
  declarations: [
    ElementsComponent,
    HashpasswordDirective,
  ],

  exports: [
    ElementsComponent,
    HashpasswordDirective,
    HttpClientModule
  ],
})
export class SharedModule { }
