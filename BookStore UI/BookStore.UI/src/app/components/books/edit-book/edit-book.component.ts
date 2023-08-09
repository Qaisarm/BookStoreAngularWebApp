import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  bookDetails: Book = {
    id: '',
    title : '',
    author:'',
    publicationDate:''
  }
  constructor(private route: ActivatedRoute, private booksService: BooksService,
    private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
this.booksService.getBook(id)
.subscribe({
  next: (response) => {
    this.bookDetails = response;
  }
})
        }
      }
    })
  }

  updateBook(){
    this.booksService.updateBook(this.bookDetails.id, this.bookDetails)
    .subscribe({
      next: (response)=> {
        this.router.navigate(['books'])
      }
    })
  }


}
