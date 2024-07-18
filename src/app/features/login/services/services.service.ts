import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDTO } from '../../../core/models/interfaces/login-dto';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SessionStorageService } from '../../../shared/utils/storage/session-storage.service';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private sessionStorageService = inject(SessionStorageService);
  protected readonly baseUrl: string = environment.serviceUrl;
  protected readonly fullUrl: string = `${this.baseUrl}auth/login`;
  private loggedIn: boolean = false;
  private token?: string;

  login(loginForm: LoginDTO): Observable<string> {
    return this.httpClient.post<string>(this.fullUrl, loginForm).pipe(
      tap(token => {
        this.token = token;
        this.loggedIn = true;
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
