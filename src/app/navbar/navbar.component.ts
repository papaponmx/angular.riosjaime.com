import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuIcon = '☰';
  isCollapsed = true;

  constructor() { }

  public getMenuIcon() {
    this.isCollapsed = !this.isCollapsed;
    console.log(`Botton menu clicked`);
    !this.isCollapsed ? this.menuIcon = '✖' : this.menuIcon = '☰';
    return this.menuIcon;
  //   : '✖';
  }

}
