import 'zone.js';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PickListModule } from './components/pick-list/pick-list.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
  importProvidersFrom(PickListModule)],
};
