import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ElementsComponent],
  declarations: [ElementsComponent]
})
export class SharedModule { }
