import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SidebarModel } from '../models/nav.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const sidebarRoutes: SidebarModel[] = [
  { path: '/home', title: 'Home', icon: 'fas fa-home'},
  { path: '/blog', title: 'Blog', icon: 'fas fa-book'},
  { path: '/forum', title: 'Forum', icon: 'fas fa-code'},
  { path: '/tutorial', title: 'Tutorials', icon: 'fas fa-code'},
  { path: '/contact', title: 'Contact', icon: 'fas fa-envelope'},
]

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // private loggedInUser: Observable<boolean>
  constructor(private http: HttpClient) { }

  getSidebarItems(): Array<any> {
    return sidebarRoutes
  }
}
