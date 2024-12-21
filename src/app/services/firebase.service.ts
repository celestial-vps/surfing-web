import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';  // Import from() to convert Promise to Observable

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Method to get data from Firestore (No change here)
  getData(collection: string): Observable<any[]> {
    return this.firestore.collection(collection).valueChanges();
  }

  // Convert the Promise returned by add() to Observable
  addData(collection: string, data: any): Observable<any> {
    const promise = this.firestore.collection(collection).add(data);  // Add returns a Promise
    return from(promise);  // Convert the Promise to Observable
  }
}
