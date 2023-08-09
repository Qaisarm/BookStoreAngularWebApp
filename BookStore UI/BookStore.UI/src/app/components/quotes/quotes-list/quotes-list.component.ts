import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quote } from 'src/app/models/quote.model';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit{
  quotes: Quote[] = [ ];
  constructor(private router: Router, private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.getAllQuotes()
    .subscribe({
     next:(quotes)=>{
       this.quotes = quotes;
     },
   error: (response)=> {
     console.log("Error", response);
   }
    })
  }
  deleteQuote(id:string){
    this.quotesService.deleteQuote(id)
    .subscribe({
      next: (response)=> {
        location.reload();
      }
    })
  }
}
