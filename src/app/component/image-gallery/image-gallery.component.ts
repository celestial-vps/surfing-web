import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-image-gallery',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './image-gallery.component.html',
    styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {
  moveCard(direction: string) {
    const menu = document.querySelector('menu');
    const cardList = document.querySelectorAll('menu li');
    
    if (cardList.length > 0) {
      const firstCard = cardList[0];

      if (direction === 'next') {
        // Move the first card to the end of the list
        menu?.appendChild(firstCard);
      } else if (direction === 'prev') {
        // Move the last card to the beginning of the list
        menu?.prepend(cardList[cardList.length - 1]);
      }
    }
  }
}
