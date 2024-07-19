import { Directive, HostListener, inject } from '@angular/core';
import { SessionStorageService } from '../utils/storage/session-storage.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLoggout]'
})
export class LoggoutDirective {

  sessionStorage = inject(SessionStorageService);
  router = inject(Router);

  @HostListener('click')
  onClick() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('data_profile');
    this.router.navigate(['landing-page']);

  }
}
