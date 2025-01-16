import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    // Set a more detailed and optimized title for better SEO
    this.titleService.setTitle('Surfing Gallery - Learn Surfing in Bali | Explore Surfing Lessons');

    // Set a meta description with more keywords and context
    this.meta.updateTag({
      name: 'description',
      content: 'Explore stunning images of surfing lessons in Bali, from beginner techniques to advanced maneuvers, capturing the beauty of Bali’s beaches and surf culture'
    });

    // Add meta keywords for SEO
    this.meta.updateTag({
      name: 'keywords',
      content: 'surfing gallery, learn surfing bali, bali surfing lessons, surfing in bali, surf lessons bali, beginner surfing, advanced surfing, bali beach, surf photos'
    });

    // Set Open Graph meta tags for social media sharing
    this.meta.updateTag({
      property: 'og:title',
      content: 'Surfing Gallery - Learn Surfing in Bali'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'View the Surfing Gallery from Bali, featuring photos of surfing lessons, from beginners to advanced. Discover Bali’s beautiful beaches and surf spots.'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'path-to-your-gallery-image.jpg'  // Replace with a URL to an image of your gallery
    });
  }
}
