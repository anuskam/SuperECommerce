import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from '../../../core/models/dto/login-dto';
import { LoginService } from '../services/login.service';
import { SessionStorageService } from '../../../shared/utils/storage/session-storage.service';
import { ApiConectionService } from '../../../core/services/api-conection/api-conection.service';

// import { UserDTO } from '../../../core/models/interfaces/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private profileService = inject(ApiConectionService);
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
    const loginFormValue: LoginDTO = this.loginForm.value;
    this.loginService.login(loginFormValue).subscribe({
      next: data => {
        this.sessionStorageService.setItem('access_token', data);
        // Esto es para gestionar roles con guards
        // const admin: UserDTO = this.
      },
    }),
      this.profileService.getList(1, 1).subscribe({
        next: data => {
          console.log(data[0].role);
          this.sessionStorageService.setItem('data_profile', data);

        },
      });
    this.loginForm.reset();
  }
}
