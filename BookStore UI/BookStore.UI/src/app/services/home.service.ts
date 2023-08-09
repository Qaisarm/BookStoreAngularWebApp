import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  getMe():Observable<string>{
    return this.http.get('https://localhost:7037/api/Auth', 
    {responseType: 'text'});
      }
}
