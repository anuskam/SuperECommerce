import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from '../../../core/models/dto/login-dto';
import { LoginService } from '../services/login.service';
import { SessionStorageService } from '../../../shared/utils/storage/session-storage.service';
import { TokenDto } from '../../../core/models/dto/token-dto';
import { UserDTO } from '../../../core/models/dto/user-dto';
import { RolesEnum } from '../../../core/models/enums/roles.enum';

// import { UserDTO } from '../../../core/models/interfaces/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private sessionStorageService = inject(SessionStorageService);
  public loginForm!: FormGroup;
  private router = inject(Router);
  private user?: UserDTO;
  public token?: TokenDto;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit(): void {
    this.login();
    this.loginForm.reset();
  }

  login(): void {
    const loginFormValue: LoginDTO = this.loginForm.value;
    this.loginService.login(loginFormValue).subscribe({
      next: data => {
        this.token = data;
        this.sessionStorageService.setItem(
          'access_token',
          this.token.access_token,
        );
        this.getProfile();

      },
    });
  }

  getProfile(): void {
    this.loginService.getProfile(this.token as TokenDto).subscribe({
      next: data => {
        this.sessionStorageService.setItem('data_profile', data);
      },
    });
    this.user = this.sessionStorageService.getItem<UserDTO>(
      'data_profile',
    ) as UserDTO;
    console.log(this.user?.role);
    this.checkRol();
  }

  checkRol(): void {
    if (this.user?.role === RolesEnum.admin) {
      this.router.navigate(['admin-panel']);
    } else {
      this.router.navigate(['catalogue']);
    }
  }
}
