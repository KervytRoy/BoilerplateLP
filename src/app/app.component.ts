import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, FooterComponent, WhoWeAreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PresentationProject';
}
