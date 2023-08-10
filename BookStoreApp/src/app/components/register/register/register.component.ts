import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  success = false;
  errMessage = '';

  user = new User();
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  register(user: User) {
    this.registerService.register(user).subscribe({
      next: () => {
        this.success = true;
      },
      error: (err) => {
        if (err.error.code == 11000)
          this.errMessage = 'User already exists!! Try something else.';
        else this.errMessage = 'Something went wrong!!';
      },
    });
  }
}
