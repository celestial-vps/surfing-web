import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { StartComponent } from '../component/start/start.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,StartComponent,NgOptimizedImage],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent    {
  
}
