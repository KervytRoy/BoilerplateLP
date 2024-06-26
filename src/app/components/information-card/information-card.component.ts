import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent {
  @Input() fontIcon: string = "";
  @Input() cardTitle: string = ""; // Nuevo parámetro para el título
  @Input() cardText: string = ""; // Nuevo parámetro para el párrafo
}
