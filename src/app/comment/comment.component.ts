import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, getDocs, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';  // to inject services in standalone components

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {

  testimonials: any[] = [];  // Array to store the testimonials

  // comments: any[] = [];
  newCommentText: string = '';
  newCommentAuthor: string = '';
  newRatting: number = 5;
  newCountry: string = '';

  // constructor(private fireStore: Firestore) {

  // }
  private firestore = inject(Firestore); // Inject Firestore service


  ngOnInit(): void {
    this.loadTestimonials();  // Load testimonials when the component initializes
  }

  async loadTestimonials(): Promise<void> {
    try {
      const commentsCollection = collection(this.firestore, 'comments');  // Get the comments collection
      const querySnapshot = await getDocs(commentsCollection);  // Get documents from Firestore

      this.testimonials = await querySnapshot.docs.map((doc) => doc.data());  // Map Firestore documents to your array
      console.log('Data base : ', this.testimonials);

    } catch (error) {
      console.error('Error fetching testimonials', error);  // Handle any errors
    }
  }

  // Number of stars in the rating system
  stars: number[] = [1, 2, 3, 4, 5];

  // Hover rating for visual feedback when mouse enters over stars
  hoverRating: number = 0;

  // Set the rating when user clicks on a star
  setRating(rating: number) {
    this.newRatting = rating;
  }

  // Update hover rating when mouse enters over stars
  setHoverRating(rating: number) {
    this.hoverRating = rating;
  }

  // Reset hover rating when mouse leaves the rating container
  resetRating() {
    this.hoverRating = 0;
  }

  // Add a new comment using the service
  async addComment(): Promise<void> {
    if (this.newCommentText.trim() && this.newCommentAuthor.trim()) {
      // Prepare the new comment data
      const newComment = {
        author: this.newCommentAuthor,
        country: this.newCountry,
        rating: this.newRatting,  // Corrected spelling from 'ratting' to 'rating'
        text: this.newCommentText
      };

      try {
        // Add new comment to Firestore collection
        const commentsCollection = collection(this.firestore, 'comments');
        const docRef = await addDoc(commentsCollection, newComment);

        // Optionally handle docRef to get document ID (e.g., to track it in your UI)
        console.log('Document written with ID: ', docRef.id);

        // Update the testimonials array with the new comment
        this.testimonials.push(newComment);

        // Clear input fields
        this.newCommentText = '';
        this.newCountry = '';
        this.newCommentAuthor = '';
        this.newRatting = 5;

        // Optionally reload the testimonials if needed
        this.loadTestimonials();

      } catch (error) {
        console.error('Error adding comment', error);  // Handle any errors
      }
    } else {
      console.log('Comment text and author are required');
    }
  }
}

