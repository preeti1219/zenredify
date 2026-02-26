import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../core/services/book.service';
import { ReviewService } from '../../core/services/review.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss',
})
export class BookDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private reviewService = inject(ReviewService);

  book = signal<any>(null);
  activeTab = signal<'description' | 'reviews'>('description');
  reviews = signal<any[]>([]);
  newReviewText = signal('');
  newRating = signal(5);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.bookService.fetchBookById(id).subscribe((res) => {
        this.book.set(res.data);
      });

      this.loadReviews(id);
    }
  }

  switchTab(tab: 'description' | 'reviews') {
    this.activeTab.set(tab);
  }

  loadReviews(bookId: string) {
    this.reviewService.fetchReviews(bookId).subscribe((res) => {
      this.reviews.set(res.data);
    });
  }

  submitReview() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || !this.newReviewText()) return;

    this.reviewService
      .addReview(id, {
        reviewText: this.newReviewText(),
        rating: this.newRating(),
      })
      .subscribe(() => {
        this.loadReviews(id);
        this.newReviewText.set('');
        this.newRating.set(5);
      });
  }
}
