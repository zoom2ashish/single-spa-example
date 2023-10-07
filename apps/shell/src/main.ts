import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerApplication, start } from 'single-spa';
import { navigateToUrl } from 'single-spa';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppModule } from './app/app.module';

window.navigate = function (url: string) {
  navigateToUrl(url);
}

registerApplication({
  name: 'app1',
  app: () => import('../../vanillajs-app/src/main'),
  activeWhen: (location) => {
    return (location.pathname === '/app1' || location.pathname === '/');
  }
});

registerApplication({
  name: 'app2',
  app: () => import('../../angular-app/src/main'),
  activeWhen: '/app2',
});

start();

platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule).then(() => {
  console.log('Angular Shell application bootstraped');
});


//
// Alternate way to load the app as UMD module which exports the library as a global variable
//
// function loadScript(appName: string, url: string) {
//   return new Promise((resolve, reject) => {
//     if (document.getElementById(appName)) {
//       return resolve(true);
//     }

//     const script = document.createElement('script');
//     script.src = url;
//     script.async = true;
//     script.id = appName;
//     script.onload = resolve;
//     script.onerror = reject;

//     document.head.appendChild(script);
//   });
// }