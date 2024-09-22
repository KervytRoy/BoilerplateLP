import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FlayersComponent } from './components/flayers/flayers.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

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
    FlayersComponent,
    ContactFormComponent,
    OurServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PresentationProject';
}
