import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from '../../../core/models/dto/login-dto';
import { ServicesService } from '../services/services.service';
import { SessionStorageService } from '../../../shared/utils/storage/session-storage.service';

// import { UserDTO } from '../../../core/models/interfaces/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(ServicesService);
  private sessionStorageService = inject(SessionStorageService);
  public loginForm!: FormGroup;
  private router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
    const loginFormValue: LoginDTO = this.loginForm.value;
    this.loginService.login(loginFormValue).subscribe({
      next: data => {
        this.sessionStorageService.setItem('access_token', data);
        // Esto es para gestionar roles con guards
        // const admin: UserDTO = this.
      },
    }),
      this.loginForm.reset();
  }
}
