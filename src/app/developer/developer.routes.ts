import { RouterConfig } from '@angular/router';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';

export const DEVELOPER_ROUTES: RouterConfig = [
    { path: '', redirectTo: ':id', pathMatch: 'full' },
    { path: ':id', component: DeveloperDetailsComponent }
];