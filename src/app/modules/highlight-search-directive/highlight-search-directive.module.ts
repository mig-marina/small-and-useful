import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirectiveRoutingModule } from './highlight-search-directive-routing.module';
import { HighlightSearchDirectiveShellComponent } from './containers/highlight-search-directive-shell/highlight-search-directive-shell.component';

@NgModule({
  declarations: [
    HighlightSearchDirectiveShellComponent,
  ],
  imports: [
    CommonModule,
    HighlightSearchDirectiveRoutingModule,
  ]
})
export class HighlightSearchDirectiveModule { }
