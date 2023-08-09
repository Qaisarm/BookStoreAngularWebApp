import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
 
  register(user:User): Observable<any>{
    return this.http.post<any>('https://localhost:7037/api/Auth/register', user);
      }
}
