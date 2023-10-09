declare module 'single-spa-html' {
  export default function singleSpaHtml(opts: any): any;
}

declare module '*.html' {
  const value: string;
  export default value
}

interface Window {
    vanillaJsApp: any;
}