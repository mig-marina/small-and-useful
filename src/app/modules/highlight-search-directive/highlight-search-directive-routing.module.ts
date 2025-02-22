import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightSearchDirectiveShellComponent } from './containers/highlight-search-directive-shell/highlight-search-directive-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: HighlightSearchDirectiveShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighlightSearchDirectiveRoutingModule {}
