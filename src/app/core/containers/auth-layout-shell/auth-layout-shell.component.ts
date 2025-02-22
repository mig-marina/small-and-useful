import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationPanelComponent } from '../../components/navigation-panel/navigation-panel.component';

@Component({
  selector: 'app-auth-layout-shell',
  imports: [
    RouterModule,
    NavigationPanelComponent,
  ],
  templateUrl: './auth-layout-shell.component.html',
  styleUrl: './auth-layout-shell.component.scss'
})
export class AuthLayoutShellComponent {

}
