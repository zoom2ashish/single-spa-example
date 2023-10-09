import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { getSingleSpaExtraProviders } from "single-spa-angular";
import { AppModule } from "./app.module";

export const bootstrap = () => {
    // Render Header component using Angular
    platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule).then(() => {
        console.log('Angular Shell application bootstraped');
    });
}
