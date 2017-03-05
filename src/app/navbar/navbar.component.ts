import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuIcon = '☰';
  isCollapsed = true;

  constructor() { }

  onInit() {

  }

  public toggleNav() {
    this.isCollapsed = !this.isCollapsed;
    !this.isCollapsed ? this.menuIcon = '✖' : this.menuIcon = '☰';
   // return this.menuIcon;
  }

}
