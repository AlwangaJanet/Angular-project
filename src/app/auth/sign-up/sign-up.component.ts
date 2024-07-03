import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$')
      ]),
      isAdmin: this.fb.control(0) // Default value for regular users
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid')
      return
    }

    this.auth.registerUser(this.form.value).subscribe({
      next: res => {
        console.log(res.message)
        this.router.navigate(['/home'])
      },
      error: err => {
        console.error('Registration failed', err);
        console.error('Backend returned code', err.status, 'body was:', err.error)
      }
    })
  }
}



  // signupData = {
  //   Username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword:''
  // }

  // constructor(private authService: AuthService, private router: Router) {}

  // onSignupSubmit() {
  //   if (this.signupData.password !== this.signupData.confirmPassword) {
  //     console.error('Passwords do not match');
  //     return;
  //   }

  //    // For simplicity, we directly log in the user after signup
  //    this.authService.login(this.signupData.email, this.signupData.password);
  //    this.router.navigate(['/home']);
  //  }



