import { NavigationService } from './../services/navigation.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public sidebarIsToggled: Boolean;
  constructor(
    private elem: ElementRef,
    private navService: NavigationService
  ) { }

  toggleSidebar() {
    
    const headerNav = document.querySelector('.header');
    const mainContainer = document.querySelector('.main-container');
    this.sidebarIsToggled = !this.sidebarIsToggled;
    if (this.sidebarIsToggled) {
      headerNav.classList.add('header-expanded');
      mainContainer.classList.add('main-expanded');
    } else {
      headerNav.classList.remove('header-expanded');
      mainContainer.classList.remove('main-expanded');
    }

  }


  ngOnInit() {
    
  }

  ngAfterViewInit() {
  }

}
