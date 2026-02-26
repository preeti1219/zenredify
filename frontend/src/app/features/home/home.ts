import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../core/services/book.service';
import { BookCardComponent } from '../../shared/book-card/book-card';
import { GENRES, UI_TEXT } from './home.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, BookCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  private bookService = inject(BookService);

  searchQuery = signal('');
  selectedGenre = signal('');
  readonly GENRES = GENRES;
  readonly UI_TEXT = UI_TEXT;

  genreOptions = [
    { label: 'All', value: GENRES.ALL },
    { label: 'Fiction', value: GENRES.FICTION },
    { label: 'Finance', value: GENRES.FINANCE },
    { label: 'Self-Help', value: GENRES.SELF_HELP },
  ];

  books = computed(() => this.bookService.books());

  bestSellers = computed(() => this.books().filter((b) => b.isBestSeller));

  newArrivals = computed(() => this.books().filter((b) => b.isNewArrival));

  editorsPick = computed(() => this.books().filter((b) => b.isEditorsPick));

  ngOnInit() {
    this.bookService.fetchBooks();
  }

  onSearch(value: string) {
    this.searchQuery.set(value);
    this.applyFilters();
  }

  onGenreChange(value: string) {
    this.selectedGenre.set(value);
    this.applyFilters();
  }

  applyFilters() {
    const q = this.searchQuery();
    const g = this.selectedGenre();

    if (!q && !g) {
      this.bookService.fetchBooks();
    } else {
      this.bookService.searchBooks(q, g);
    }
  }

  clearFilters() {
    this.searchQuery.set('');
    this.selectedGenre.set('');
    this.bookService.fetchBooks();
  }
}
