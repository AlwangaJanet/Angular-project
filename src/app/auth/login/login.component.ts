import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy, OnInit {
  form!: FormGroup;
  error!: string;
  message!: string;

  constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.authService.loginUser(this.form.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.message = res.message;
        const decodedToken = this.authService.decodeToken(res.token);
        const isAdmin = decodedToken.isAdmin;

        if (res.token) {
          if (isAdmin) {
            this.router.navigate(['/admin']);
            alert('Admin login successful!');
          } else {
            this.router.navigate(['/home']);
            alert('Login successful!');
          }
        }
      },
      err => {
        console.log(err);
        this.error = err.error.message;
        alert('Login failed: ' + this.error);
      }
    );
  }
}



  // loginData = {
  //   email: '',
  //   password: ''
  // }

  // constructor(private authService: AuthService, private router: Router) {}

  // onLoginSubmit() {
  //   if (this.authService.login(this.loginData.email, this.loginData.password)) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }
