import singleSpaHtml from 'single-spa-html';
import template from './index.html';

const htmlLifecycles = singleSpaHtml({
  template: template, // '<div>Hello, Plain Vaniall Application!</div>',
});

export const {
  bootstrap,
  mount,
  unmount,
} = htmlLifecycles;
