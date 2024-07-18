import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  public loginForm!: FormGroup;
  private router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required, Validators.minLength(4)],
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
  }
}
