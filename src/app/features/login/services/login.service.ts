import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDTO } from '../../../core/models/dto/login-dto';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SessionStorageService } from '../../../shared/utils/storage/session-storage.service';

import { Router } from '@angular/router';
import { TokenDto } from '../../../core/models/dto/token-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private sessionStorageService = inject(SessionStorageService);
  protected readonly baseUrl: string = environment.serviceUrl;
  protected readonly loginFullUrl: string = `${this.baseUrl}auth/login`;
  protected readonly userFullUrl: string = `${this.baseUrl}auth/profile`;
  // pendiente new behaviour subject
  private loggedIn: boolean = false;

  login(loginForm: LoginDTO): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>(this.loginFullUrl, loginForm);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getProfile(token: TokenDto): Observable<any> {
    console.log('oteeeen', token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    });
    return this.httpClient.get(this.userFullUrl, { headers }).pipe(
      tap(data => {
        console.log(data);
      }),
    );
  }

  logout(): void {
    this.sessionStorageService.removeItem('access_token');
    this.loggedIn = false;
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
