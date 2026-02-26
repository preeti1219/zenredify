import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCardComponent {
  @Input() book: any;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/book', this.book._id]);
  }
}
