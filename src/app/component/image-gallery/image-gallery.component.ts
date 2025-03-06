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

}
