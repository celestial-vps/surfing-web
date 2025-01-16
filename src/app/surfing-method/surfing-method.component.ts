import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-surfing-method',
  standalone: true,
  imports: [],
  templateUrl: './surfing-method.component.html',
  styleUrl: './surfing-method.component.scss'
})
export class SurfingMethodComponent {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    // Set the page title
    this.titleService.setTitle('Surf Coaching Method: Master the Art of Surfing with Expert Lessons');

    // Update the meta description for SEO
    this.meta.updateTag({
      name: 'description',
      content: 'Explore our Surf Coaching Method with lessons for all levels in Bali. Learn everything from the basics to advanced techniques with expert guidance.'
    });
  }
}
