import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('asDivNav', { static: true }) asDivNav!: ElementRef;

  constructor(private renderer: Renderer2, private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    const divNav = this.asDivNav.nativeElement;
    const toggleButton = divNav.querySelector('#toggle-menu') as HTMLElement;
    const navMobile = divNav.querySelector('#nav-mobile') as HTMLElement;
    const links = divNav.querySelectorAll('a[href]') as NodeListOf<HTMLAnchorElement>;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        divNav.style.position = 'fixed';
        divNav.style.zIndex = '999';
        divNav.style.animation = 'slide-down 0.8s ease forwards';
      } else {
        divNav.style.position = 'block';
        divNav.style.animation = 'none';
      }
    });

    toggleButton.addEventListener('click', () => {
      navMobile.classList.toggle('active');
    });

    this.renderer.listen('document', 'click', (event: Event) => {
      const target = event.target as HTMLElement;

      if (!divNav.contains(target) && navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
      }
    });

    links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('click', (event: Event) => {
        const href = link.getAttribute('href')!;
        if (href.startsWith('#')) {
          event.preventDefault();
          const targetId = href.substring(1);
          if (targetId === '') {
            this.viewportScroller.scrollToPosition([0, 0]);
          } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              this.viewportScroller.scrollToPosition([0, targetElement.offsetTop]);
            }
          }
        }
      });
    });
  }
}
