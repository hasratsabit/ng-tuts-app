import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="showLoadingSpinner" class="spinner-wrapper">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  `,
  styles: []
})
export class SpinnerComponent implements OnInit {

  public showLoadingSpinner: Boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoadingSpinner = true;
      }
      if(routerEvent instanceof NavigationEnd) {
        this.showLoadingSpinner = false;
      }
    })
  }

  ngOnInit() {
  }

}
