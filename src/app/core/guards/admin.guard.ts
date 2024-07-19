import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { RolesEnum } from '../models/enums/roles.enum';
import { SessionStorageService } from '../../shared/utils/storage/session-storage.service';
import { UserDTO } from '../models/dto/user-dto';

export const adminGuard: CanMatchFn = (route, segments) => {
  const sessionStorageService = inject(SessionStorageService);
  const user = sessionStorageService.getItem<UserDTO>('data_profile');

  if (user?.role === RolesEnum.admin) {
    return true;
  }

  return false;
};
