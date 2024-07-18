import { InjectionToken } from '@angular/core';

export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>(
  'ServiceConfig',
);
