import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperService } from './developer/developer.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, DeveloperComponent, ROUTER_DIRECTIVES],
  providers: [DeveloperService]
})

export class AppComponent {
  
}
