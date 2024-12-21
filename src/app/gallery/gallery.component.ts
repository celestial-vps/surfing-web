import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Gallery');
    this.meta.updateTag({ name: 'description', content: 'LEARN SURFING BALI' });
  }
}
