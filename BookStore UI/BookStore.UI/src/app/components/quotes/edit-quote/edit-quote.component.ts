import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from 'src/app/models/quote.model';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit{

  quoteDetails: Quote = {
    id: '',
    title : '',
    author:'',
  }
  constructor(private route: ActivatedRoute, private quotesService: QuotesService,
    private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
this.quotesService.getQuote(id)
.subscribe({
  next: (response) => {
    this.quoteDetails = response;
  }
})
        }
      }
    })
  }

  updateQuote(){
    this.quotesService.updateQuote(this.quoteDetails.id, this.quoteDetails)
    .subscribe({
      next: (response)=> {
        this.router.navigate(['quotes'])
      }
    })
  }


}

