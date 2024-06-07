import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flayers',
  standalone: true,
  imports: [],
  templateUrl: './flayers.component.html',
  styleUrl: './flayers.component.scss'
})
export class FlayersComponent implements AfterViewInit {
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    const carouselContainer = this.carouselContainer.nativeElement;
    const carouselSlides = carouselContainer.querySelectorAll('.slide');
    const btnPrev = carouselContainer.querySelector('.prev');
    const btnNext = carouselContainer.querySelector('.next');
    const dotsSlide = carouselContainer.querySelector('.dots-container');
    let currentSlide = 0;

    const activeDot = (slide: number) => {
      carouselContainer.querySelectorAll('.dot').forEach((dot: { classList: { remove: (arg0: string) => any; }; }) => dot.classList.remove('active'));
      carouselContainer.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = (slides: number) => {
      carouselSlides.forEach((slide: HTMLElement, index: number) => {
        slide.style.transform = `translateX(${100 * (index - slides)}%)`;
      });
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', () => {
      currentSlide++;
      if (carouselSlides.length - 1 < currentSlide) {
        currentSlide = 0;
      }
      changeSlide(currentSlide);
      activeDot(currentSlide);
    });

    btnPrev.addEventListener('click', () => {
      currentSlide--;
      if (0 >= currentSlide) {
        currentSlide = 0;
      }
      changeSlide(currentSlide);
      activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('dot')) {
        const slide = target.dataset['slide'];
        changeSlide(Number(slide));
        activeDot(Number(slide));
      }
    });
  }
}
