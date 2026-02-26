import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:5000/api';

  books = signal<any[]>([]);
  selectedBook = signal<any | null>(null);

  constructor(private http: HttpClient) {}

  fetchBooks() {
    this.http.get<any>(`${this.apiUrl}/books`).subscribe((res) => this.books.set(res.data));
  }

  fetchBookById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/books/${id}`);
  }

  searchBooks(query: string, genre: string) {
    this.http
      .get<any>(`${this.apiUrl}/search?q=${query}&genre=${genre}`)
      .subscribe((res) => this.books.set(res.data));
  }

  getCategories() {
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }
}
