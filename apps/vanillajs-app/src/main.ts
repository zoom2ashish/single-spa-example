import singleSpaHtml from 'single-spa-html';
import template from './index.html';

const htmlLifecycles = singleSpaHtml({
  template: template,
});

export const {
  bootstrap,
  mount,
  unmount,
} = htmlLifecycles;
