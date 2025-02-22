import { Routes } from '@angular/router';
import { AuthLayoutShellComponent } from './core/containers/auth-layout-shell/auth-layout-shell.component';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'highlight-search-directive',
        loadChildren: () => import('./modules/highlight-search-directive/highlight-search-directive.module').then((m) => m.HighlightSearchDirectiveModule),
      }
    ],
  }
];
