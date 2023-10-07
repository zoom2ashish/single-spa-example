import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgZone } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AppModule } from './app/app.module';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';


const lifecycles = singleSpaAngular ({
  bootstrapFunction: () => {
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
  },
  template: `<app-root></app-root>`,
  Router,
  NavigationStart,
  NgZone
});

export const {
  bootstrap,
  mount,
  unmount,
} = lifecycles;

