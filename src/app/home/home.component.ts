import { Component } from '@angular/core'; 
import { CommentComponent } from '../comment/comment.component';
import { NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommentComponent,NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Home');
    this.meta.updateTag({ name: 'description', content: 'LEARN SURFING BALI' });
  }
}
