import { Component } from '@angular/core';
import { navigateToUrl } from 'single-spa';
@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app2';

  onNavigate(url: string) {
    navigateToUrl(url);
  }
}
