declare module 'single-spa-html' {
    export default function singleSpaHtml(opts: any): any;
}

interface Window {
    app2: any;
    app1: any;
    vanillaJsApp: any;
    navigate: (string)  => void;
}