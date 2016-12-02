import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  directives: [ROUTER_DIRECTIVES],
  styles: [`
      .navbar-custom {
          background-color: #3399ff;
          color: #ffffff;
          border-radius: 0;
      }
      .navbar-custom .navbar-nav > li > a {
          color: #fff;
      }
      .navbar-custom .navbar-nav > .active > a, .navbar-nav > .active > a:hover, .navbar-nav > .active > a:focus {
          color: #ffffff;
          background-color: #0066ff;
      }
      .navbar-custom .navbar-brand {
          color: #eeeeee;
      }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
