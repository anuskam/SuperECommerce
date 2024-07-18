import { InjectionToken } from '@angular/core';
import { ServiceConfig } from '../../../models/config-interfaces/service-config';

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig');
