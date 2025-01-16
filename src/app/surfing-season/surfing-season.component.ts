import { trigger, transition, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { backInLeft, backInRight } from 'ng-animate';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-surfing-season',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './surfing-season.component.html',
    styleUrls: ['./surfing-season.component.scss'],
    animations: [
        trigger('myAnimationLeft', [transition('void => *', useAnimation(backInLeft, {}))]),
        trigger('myAnimationRight', [transition('void => *', useAnimation(backInRight, {}))])
    ]
})
export class SurfingSeasonComponent {
  showImage: boolean = true;

  constructor(private meta: Meta, private titleService: Title, private router: Router) {}

  ngOnInit() {
    // Set title for SEO
    this.titleService.setTitle('Surf Season - Best Surfing Sessions in Bali');

    // Set meta description for SEO
    this.meta.updateTag({ name: 'description', content: 'Morning and Afternoon Surfing Sessions in Bali. Book your surfing adventure today for an unforgettable experience.' });

    // Set meta keywords for SEO
    this.meta.updateTag({ name: 'keywords', content: 'surfing bali, morning surfing session, afternoon surfing session, bali surfing packages, surf lessons bali, bali surf spots' });
  }

  onPress(event: Event) {
    this.router.navigate(['/order']);
  }
}
