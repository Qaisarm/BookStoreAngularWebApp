import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}
  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(
      'https://bookstoreapiweb.azurewebsites.net/api/quotes'
    );
  }

  addQuote(addQuoteRequest: Quote): Observable<Quote> {
    addQuoteRequest.id = '0';
    return this.http.post<Quote>(
      'https://bookstoreapiweb.azurewebsites.net/api/quotes',
      addQuoteRequest
    );
  }

  getQuote(id: string): Observable<Quote> {
    return this.http.get<Quote>(
      'https://bookstoreapiweb.azurewebsites.net/api/quotes/' + id
    );
  }

  updateQuote(id: string, updateQuoteRequest: Quote): Observable<Quote> {
    return this.http.put<Quote>(
      'https://bookstoreapiweb.azurewebsites.net/api/quotes/' + id,
      updateQuoteRequest
    );
  }
  deleteQuote(id: string): Observable<Quote> {
    return this.http.delete<Quote>(
      'https://bookstoreapiweb.azurewebsites.net/api/quotes/' + id
    );
  }
}
