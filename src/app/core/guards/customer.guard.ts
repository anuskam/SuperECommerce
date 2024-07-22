import { CanMatchFn } from '@angular/router';
import { SessionStorageService } from '../../shared/utils/storage/session-storage.service';
import { UserDTO } from '../models/dto/user-dto';
import { inject } from '@angular/core';
import { RolesEnum } from '../models/enums/roles.enum';

export const customerGuard: CanMatchFn = () => {
  const sessionStorageService = inject(SessionStorageService);
  const user = sessionStorageService.getItem<UserDTO>('data_profile');

  if (user?.role === RolesEnum.customer) return true;
  else return false;
};
