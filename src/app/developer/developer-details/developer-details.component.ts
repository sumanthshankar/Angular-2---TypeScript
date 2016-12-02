import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Subscription } from 'rxjs/Rx';
import { Developer } from '../developer';
import { Language } from '../language';

@Component({
  moduleId: module.id,
  selector: 'app-developer-details',
  templateUrl: 'developer-details.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DeveloperDetailsComponent implements OnInit, OnDestroy {
  private selectedDeveloper: Developer;
  private subscription: Subscription;
  private id: number;
  private languages: Language;

  constructor(private developerService: DeveloperService, 
  private route: Router, 
  private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
       this.id = + params['id'];
       //this.selectedDeveloper = this.developerService.getDeveloper(this.id);
    });
    this.selectedDeveloper = this.developerService.getDeveloper(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
