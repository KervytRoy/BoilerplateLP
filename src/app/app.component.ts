import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FlayersComponent } from './components/flayers/flayers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PresentationComponent,
    FooterComponent,
    WhoWeAreComponent,
    OurValuesComponent,
    NavBarComponent,
    HeaderComponent,
    FlayersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PresentationProject';
}
