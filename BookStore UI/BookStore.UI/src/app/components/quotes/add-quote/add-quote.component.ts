import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quote } from 'src/app/models/quote.model';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit{
  addQuoteRequest: Quote = {
    id: '',
    title : '',
    author:''
  }
  constructor(private quotesService: QuotesService, private router: Router) {}
  ngOnInit(): void {
    
  }
  addQuote(){
    this.quotesService.addQuote(this.addQuoteRequest)
    .subscribe({
      next:(quote)=>{
        this.router.navigate(['/quotes'])
      }
    })
   }
}
