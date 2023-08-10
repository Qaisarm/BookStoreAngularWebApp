import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message = '';
  user = new User();
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {}
  login(user: User) {
    this.loginService.login(user).subscribe({
      next: (token: string) => {
        localStorage.setItem('jwtAuthToken', token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.message = 'Wrong username or password!!';
      },
    });
  }
}
