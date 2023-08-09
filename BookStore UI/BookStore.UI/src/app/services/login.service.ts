import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  login (user: User):Observable <string> {
    return this.http.post('https://localhost:7037/api/Auth/login', user,
    {responseType: 'text'});
    
  }
 
}