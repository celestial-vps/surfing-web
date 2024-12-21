import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Import map from rxjs/operators

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'assets/data/comment.json';  // URL to your local JSON file

  constructor(private http: HttpClient) { }

  // Method to fetch data from the JSON file
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Make the HTTP GET request to fetch the data
  }

  // Add a new comment (this will update the JSON data in-memory for simplicity)
  addComment(newComment: { text: string, author: string }): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => {
        const newId = data.length + 1;  // Generate a new ID based on the length
        const updatedComments = [...data, { id: newId, ...newComment }];        
        // In a real scenario, you'd make a PUT/POST request to update the backend or persist the data
        return updatedComments;  // Return the updated array of comments
      })
    );
  }
}
