import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { QuotesListComponent } from './components/quotes/quotes-list/quotes-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { EditQuoteComponent } from './components/quotes/edit-quote/edit-quote.component'; 
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    QuotesListComponent,
    AddBookComponent,
    AddQuoteComponent,
    EditBookComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    EditQuoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
