import { Component, OnInit } from '@angular/core';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-developer',
  templateUrl: 'developer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DeveloperComponent implements OnInit {
  developers: Developer[] = [];
  id: number;

  constructor(public developerService: DeveloperService) { }

  ngOnInit() {
    this.developers = this.developerService.getDevelopers();
  }

}
