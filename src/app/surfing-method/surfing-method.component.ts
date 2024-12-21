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
    this.titleService.setTitle('Surf Coaching Method');
    this.meta.updateTag({ name: 'description', content: 'Ssurf Coaching Method' });
  }
}
