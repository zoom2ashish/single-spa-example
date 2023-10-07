import singleSpaHtml from 'single-spa-html';

const htmlLifecycles = singleSpaHtml({
  template: '<div>Hello, Plain Vaniall Application!</div>',
});

export const {
  bootstrap,
  mount,
  unmount,
} = htmlLifecycles;
