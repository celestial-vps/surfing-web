import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  // faStar = faStar
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  

  setRating(value: number) {
    if (this.readonly) return;
    this.rating = value;
  }
}