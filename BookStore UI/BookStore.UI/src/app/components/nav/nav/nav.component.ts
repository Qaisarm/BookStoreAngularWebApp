import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../emitters/authEmitter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false ;
  constructor() { }
  ngOnInit(): void {
    Emitter.authEmitter.subscribe((res: boolean)=>{
      this.isLoggedIn = res
    })
  }
  logout(){
    localStorage.removeItem('token')
    Emitter.authEmitter.emit(false)
  }
}