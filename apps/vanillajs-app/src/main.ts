// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

import singleSpaHtml from 'single-spa-html';

const htmlLifecycles = singleSpaHtml({
  template: '<div>Hello, Plain Vaniall Application!</div>',
});

export const {
  bootstrap,
  mount,
  unmount,
} = htmlLifecycles;
