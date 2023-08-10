import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { EditQuoteComponent } from './components/quotes/edit-quote/edit-quote.component';
import { QuotesListComponent } from './components/quotes/quotes-list/quotes-list.component';
import { RegisterComponent } from './components/register/register/register.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

/*   {path: '',
component: BooksListComponent
},
 */
{path: 'books',
component: BooksListComponent
},
{path: 'books/add',
component: AddBookComponent
},
{path: 'books/edit/:id',
component: EditBookComponent
},
{path: 'quotes',
component: QuotesListComponent
},
{path: 'quotes/add',
component: AddQuoteComponent
},
{path: 'quotes/edit/:id',
component: EditQuoteComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
