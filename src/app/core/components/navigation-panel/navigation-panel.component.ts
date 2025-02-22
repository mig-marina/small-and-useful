import { Component } from '@angular/core';
import { NAV_CONFIGURATION } from './navigation.config';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-panel',
  imports: [
    RouterModule,
    RouterLink,
  ],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss'
})
export class NavigationPanelComponent {
  navConfiguration = NAV_CONFIGURATION;
}
