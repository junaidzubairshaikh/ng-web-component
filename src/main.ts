import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PickListComponent } from './app/components/pick-list/pick-list.component';


(async () => {
  
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const pickUpComponent = createCustomElement(PickListComponent, { injector: app.injector });
  customElements.define('my-pickup-list', pickUpComponent);

  // bootstrap the application
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
})();