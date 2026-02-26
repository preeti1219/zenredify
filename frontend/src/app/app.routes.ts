import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { BookDetailsComponent } from './features/book-details/book-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: '**', redirectTo: '' },
];
