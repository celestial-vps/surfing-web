import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-image-accomodation',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './image-accomodation.component.html',
    styleUrls: ['./image-accomodation.component.scss']
})
export class ImageAccomodationComponent implements AfterViewInit {
    
    @ViewChild('imageList') imageListRef: ElementRef | undefined;
    @ViewChild('prevButton') prevButtonRef: ElementRef | undefined;
    @ViewChild('nextButton') nextButtonRef: ElementRef | undefined;
    maxScrollLeft: number = 0;
  
    ngAfterViewInit() {
      const imageList = this.imageListRef?.nativeElement;
      const slideButtons = [this.prevButtonRef?.nativeElement, this.nextButtonRef?.nativeElement];
  
      if (imageList && slideButtons.every(button => button)) {
        this.maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
        slideButtons.forEach(button => {
          button.addEventListener('click', () => {
            const direction = button.id === 'prev-slide' ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          });
        });
  
        imageList.addEventListener('scroll', () => this.handleSlideButtons(imageList));
        this.handleSlideButtons(imageList); // Initial button visibility check
      }
    }
  
    handleSlideButtons(imageList: HTMLElement) {
      const prevButton = this.prevButtonRef?.nativeElement;
      const nextButton = this.nextButtonRef?.nativeElement;
  
      if (prevButton && nextButton) {
        prevButton.style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        nextButton.style.display = imageList.scrollLeft >= this.maxScrollLeft ? 'none' : 'block';
      }
    }
}