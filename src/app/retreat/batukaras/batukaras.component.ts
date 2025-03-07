import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageGalleryComponent } from '../../component/image-gallery/image-gallery.component';
import { ImageAccomodationComponent } from '../../component/image-accomodation/image-accomodation.component';

@Component({
  selector: 'app-batukaras',
  standalone: true,
  imports: [NgOptimizedImage,FontAwesomeModule,ImageGalleryComponent,ImageAccomodationComponent],
  templateUrl: './batukaras.component.html',
  styleUrl: './batukaras.component.scss'
})
export class BatukarasComponent {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    // Set the page title
    // this.titleService.setTitle('Surf Coaching Method: Master the Art of Surfing with Expert Lessons');

    // // Update the meta description for SEO
    // this.meta.updateTag({
    //   name: 'description',
    //   content: 'Explore our Surf Coaching Method with lessons for all levels in Bali. Learn everything from the basics to advanced techniques with expert guidance.'
    // });
  }
}
