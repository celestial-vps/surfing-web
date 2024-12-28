import { trigger, transition, useAnimation } from '@angular/animations';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { backInLeft, backInRight } from 'ng-animate';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-surfing-season',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './surfing-season.component.html',
  styleUrl: './surfing-season.component.scss',
  animations: [
    trigger('myAnimationLeft', [transition('void => *', useAnimation(backInLeft, {      
    }))]),
    trigger('myAnimationRight', [transition('void => *', useAnimation(backInRight, {
      
    }))])
  ],
})
export class SurfingSeasonComponent {
  showImage:boolean = true;
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Surf Season');
    this.meta.updateTag({ name: 'description', content: 'Morning Session, Afternoon Season' });
  }
}
