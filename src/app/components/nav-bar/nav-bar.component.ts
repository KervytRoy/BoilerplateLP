import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('asDivNav', { static: true }) asDivNav!: ElementRef;

  ngAfterViewInit() {
    const divNav = this.asDivNav.nativeElement;
    const toggleButton = divNav.querySelector('#toggle-menu') as HTMLElement; // Cambio a querySelector
    const navMobile = divNav.querySelector('#nav-mobile') as HTMLElement; // Cambio a querySelector

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      // Ajustar la posición según la visibilidad
      if (scrollTop > 100) {
        divNav.style.position = 'fixed';
        divNav.style.zIndex = '999';
        divNav.style.animation = 'slide-down 0.8s ease forwards';
      } else {
        divNav.style.position = 'block'; // Otra posición deseada
        divNav.style.animation = 'none';
      }
    });

    toggleButton.addEventListener('click', () => {
      navMobile.classList.toggle('active');
    });
  }

}
