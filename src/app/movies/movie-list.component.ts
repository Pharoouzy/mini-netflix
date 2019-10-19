import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	movies: any = [
			{
				image: 'assets/movies/terminator.jpg',
				title: 'The Avengers',
				description: 'some text heres',
				rated: 4,
				released: 2019,
				runtime: 250,
				genre: 'Action',
				director: 'Simon Peter',
				writer: 'Writer Man',
				actors: [
					'simon',
					'simon',
					'simon'
				],
				plot: '',
				language: 'English',
				country: 'Uganda',
				awards: 'People\'s choice',
				link: 'www.youtube.com/trailer' 
			},
	]

  constructor() { }

  ngOnInit() {
  }

}
