import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../emitters/authEmitter';
import { User } from 'src/app/models/user.model';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user = new User();
  constructor(private homeService : HomeService) { }
  
  ngOnInit(): void {
    this.homeService.getMe().subscribe({next: (name: string) => {
      this.user.userName =  name
      Emitter.authEmitter.emit(true)
    },error : (err) =>{
      Emitter.authEmitter.emit(false)
    }})
  }

}
