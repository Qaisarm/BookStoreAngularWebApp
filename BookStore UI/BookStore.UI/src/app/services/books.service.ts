import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseApiUrl: string = (environment as any).baseApiUrl;
  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Book[]>{
return this.http.get<Book[]>('https://localhost:7037/api/books');
  }

  addBook(addBookRequest: Book): Observable<Book>{
    addBookRequest.id = "0"
    return this.http.post<Book>('https://localhost:7037/api/books', addBookRequest);
  }

  getBook(id : string): Observable<Book>{
    return this.http.get<Book>('https://localhost:7037/api/books/'+ id);
      }

      updateBook(id :string, updateBookRequest: Book): Observable<Book>{
        return this.http.put<Book>('https://localhost:7037/api/books/'+ id, updateBookRequest);
      }
      deleteBook(id: string): Observable<Book>{
        return this.http.delete<Book>('https://localhost:7037/api/books/'+ id);

      }
}
