import { CanActivateFn } from '@angular/router';
import { SessionStorageService } from '../../shared/utils/storage/session-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const sessionStorageService = inject(SessionStorageService);
  const isLogged = sessionStorageService.getItem('access_token');
  if (isLogged) {
    return true;
  } else {
    return false;
  }
};
