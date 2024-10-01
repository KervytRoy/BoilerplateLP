import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-redirection',
  standalone: true,
  imports: [],
  templateUrl: './redirection.component.html',
  styleUrl: './redirection.component.scss'
})
export class RedirectionComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
}
