import { DOCUMENT, CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('asSlider', { static: false }) slider!: ElementRef;

  images: string[] = [
    '../../../assets/7.png',
    '../../../assets/3.png'
  ];

  operacion: number = 0;
  counter: number = 0;
  widthImg: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');

    const btnLeft = this.document.querySelector(".s-btn-left");
    const btnRight = this.document.querySelector(".s-btn-right");
    
    if (!this.slider) {
      console.error('Slider element not found');
      return;
    }

    const slider = this.slider.nativeElement;
    const sliderSections = slider.querySelectorAll(".s-slider-section");
    
    console.log('Slider sections:', sliderSections.length);
    
    if (sliderSections.length === 0) {
      console.error('Slider sections not found');
      return;
    }

    this.widthImg = 100 / sliderSections.length;
    console.log('Width of each image:', this.widthImg);

    btnLeft!.addEventListener("click", () => this.moveToLeft(slider, sliderSections));
    btnRight!.addEventListener("click", () => this.moveToRight(slider, sliderSections));

    setInterval(() => {
      this.moveToRight(slider, sliderSections);
    }, 4000);
  }

  moveToRight(slider: HTMLElement, sliderSections: NodeListOf<HTMLElement>): void {
    console.log('moveToRight called');
    if (this.counter >= sliderSections.length - 1) {
      this.counter = 0;
      this.operacion = 0;
      slider.style.transform = `translate(-${this.operacion}%)`;
      slider.style.transition = "none";
      return;
    }
    this.counter++;
    this.operacion = this.operacion + this.widthImg;
    slider.style.transform = `translate(-${this.operacion}%)`;
    slider.style.transition = "all ease .6s";
  }

  moveToLeft(slider: HTMLElement, sliderSections: NodeListOf<HTMLElement>): void {
    console.log('moveToLeft called');
    this.counter--;
    if (this.counter < 0) {
      this.counter = sliderSections.length - 1;
      this.operacion = this.widthImg * (sliderSections.length - 1);
      slider.style.transform = `translate(-${this.operacion}%)`;
      slider.style.transition = "none";
      return;
    }
    this.operacion = this.operacion - this.widthImg;
    slider.style.transform = `translate(-${this.operacion}%)`;
    slider.style.transition = "all ease .6s";
  }
}