import { navigateToUrl, registerApplication, start } from 'single-spa';

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

function loadStylesheets(appName: string, url: string) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(appName)) {
      return resolve(true);
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.id = appName;
    link.onload = resolve;
    link.onerror = reject;

    document.head.appendChild(link);
  });
}

registerApplication({
  name: 'vanillaJsApp',
  app: () => Promise.all([
    loadStylesheets('vanillajs-app-styles', 'http://localhost:4201/styles.css'),
    loadScript('vanillajs-app-main', 'http://localhost:4201/main.js')
  ]).then(() => {
    return window['vanillaJsApp'];
  }),
  activeWhen: (location) => {
    return (location.pathname === '/app1' || location.pathname === '/');
  }
});

registerApplication({
  name: 'angularApp',
  app: () => import('../../angular-app/src/main'),
  activeWhen: '/app2',
});

start();

import('./app/bootstrap').then((bootstrap) => {
  bootstrap.bootstrap();
});