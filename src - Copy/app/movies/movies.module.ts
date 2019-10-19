import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MoviesDetailsComponent } from './movies-details.component';

const components = [
	MovieListComponent,
	MoviesDetailsComponent
	];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class MoviesModule { }
