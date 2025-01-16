import { Component, inject } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the WhatsApp icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommentComponent,
    NgOptimizedImage,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private meta: Meta, private titleService: Title) { }
  faWhatsapp = faWhatsapp;

  // firebaseService = inject(FirebaseService);

  redirectToWhatsApp(): void {
    const url = 'https://wa.me/6282247153069?text=Hello%20there%20I%20Wont%20Order%20Morning%20Season!';
    window.open(url, '_blank'); // Open the URL in a new tab
  }
  
  ngOnInit() {
    // this.titleService.setTitle('Home');
    // this.meta.updateTag({ name: 'description', content: 'LEARN SURFING BALI' });
    this.titleService.setTitle("Learn Surfing in Bali - Best Surf Lessons in Bali");

    this.meta.updateTag({
      name: 'description',
      content: 'Find out the best beaches, surf schools, and prices for learning to surf in Bali. Start your surfing journey today!'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'learn surfing in Bali, best place to learn surfing in Bali, surfing lessons in Bali, beginner surfing Bali'
    });
  }

  // addData() {
  //   const data = {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     age: 30
  //   };

  //   // Call Firebase service to add data
  //   this.firebaseService.addData('users', data);
  // }

  // getData() {
  //   // Call Firebase service to get data
  //   this.firebaseService.getData('users').then(data => {
  //     console.log("Fetched users: ", data);
  //   });
  // }

}
