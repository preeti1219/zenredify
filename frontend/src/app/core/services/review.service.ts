import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api';

  reviews = signal<any[]>([]);

  fetchReviews(bookId: string) {
    return this.http.get<any>(`${this.apiUrl}/reviews/${bookId}`);
  }

  addReview(bookId: string, review: { reviewText: string; rating: number }) {
    return this.http.post<any>(`${this.apiUrl}/reviews/${bookId}`, review);
  }
}
