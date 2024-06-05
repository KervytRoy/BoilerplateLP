import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { InformationCardComponent } from '../information-card/information-card.component';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [MatGridListModule, InformationCardComponent],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {

}
