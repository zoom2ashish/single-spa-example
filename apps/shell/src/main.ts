import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerApplication, start } from 'single-spa';
import { navigateToUrl } from 'single-spa';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppModule } from './app/app.module';

window.navigate = function (url: string) {
  navigateToUrl(url);
}

function loadScript(appName: string, url: string) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(appName)) {
      return resolve(true);
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.id = appName;
    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}

window.addEventListener('beforeunload', () => {
  debugger;
})

registerApplication({
  name: 'app1',
  app: () => loadScript('vanillajs-app-main', 'http://localhost:4201/main.js').then(() => {
    return window['vanillaJsApp'];
  }),
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


