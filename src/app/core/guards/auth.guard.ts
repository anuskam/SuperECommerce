import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../../shared/utils/storage/session-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const sessionStorageService = inject(SessionStorageService);
  const isLogged = sessionStorageService.getItem('access_token');
  const router = inject(Router);

  if (!isLogged) {
    return true;
  } else {
    router.navigate(['landing-page']);
    return false;
  }
};
