import { HeaderComponent } from './header.component';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperDetailsComponent } from './developer/developer-details/developer-details.component';
import { AddDeveloperComponent } from './developer/add-developer/add-developer.component';
import { provideRouter } from '@angular/router';
import { RouterConfig } from '@angular/router';
import { DEVELOPER_ROUTES } from './developer/developer.routes';

export const APP_ROUTES_PROVIDERS: RouterConfig = [
    provideRouter([
        { path: '', redirectTo: '/developers', pathMatch: 'full' },
        { path: 'developers', component: DeveloperComponent },
        { path: 'developer-details/:id', component: DeveloperDetailsComponent },
        { path: 'add-developer', component: AddDeveloperComponent }
    ])
];