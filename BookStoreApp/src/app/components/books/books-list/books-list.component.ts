import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  constructor(private router: Router, private booksService: BooksService) {}
  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (response) => {
        console.log('Error', response);
      },
    });
  }
  deleteBook(id: string, context: string) {
    this.booksService.deleteBook(id).subscribe(
      (response) => {
        if (context === 'books') {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/books']);
            });
        } else if (context === 'home') {
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        // Handle error if necessary
        console.error('Error deleting book:', error);
      }
    );
  }
}
