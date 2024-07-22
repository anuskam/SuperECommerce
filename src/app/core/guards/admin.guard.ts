import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { RolesEnum } from '../models/enums/roles.enum';
import { SessionStorageService } from '../../shared/utils/storage/session-storage.service';
import { UserDTO } from '../models/dto/user-dto';

export const adminGuard: CanMatchFn = () => {
  const sessionStorageService = inject(SessionStorageService);
  const user = sessionStorageService.getItem<UserDTO>('data_profile');
  const router = inject(Router);

  if (user?.role === RolesEnum.admin) return true;
  else {
    router.navigate(['home/catalogue']);
    return false;
  }
};
