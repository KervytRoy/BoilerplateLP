import { Routes } from '@angular/router';
import { RedirectionComponent } from './pages/redirection/redirection.component';
import { MainComponent } from './pages/main/main.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'redirection', component: RedirectionComponent },
  ]},
];
