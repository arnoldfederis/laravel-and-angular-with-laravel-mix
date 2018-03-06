import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AngularModule } from './angular.module';

if (process.env.ENV === 'production') {
  	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AngularModule);