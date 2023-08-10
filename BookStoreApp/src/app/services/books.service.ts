import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      'https://bookstoreapiweb.azurewebsites.net/api/books'
    );
  }

  addBook(addBookRequest: Book): Observable<Book> {
    addBookRequest.id = '0';
    return this.http.post<Book>(
      'https://bookstoreapiweb.azurewebsites.net/api/books',
      addBookRequest
    );
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(
      'https://bookstoreapiweb.azurewebsites.net/api/books/' + id
    );
  }

  updateBook(id: string, updateBookRequest: Book): Observable<Book> {
    return this.http.put<Book>(
      'https://bookstoreapiweb.azurewebsites.net/api/books/' + id,
      updateBookRequest
    );
  }
  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(
      'https://bookstoreapiweb.azurewebsites.net/api/books/' + id
    );
  }
}
