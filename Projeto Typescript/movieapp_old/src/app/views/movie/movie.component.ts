import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array <Movie>();
  selMovie: Movie = null;
  isAddingNewMovie = false;

  constructor() {
    const filme1 = new Movie();
    filme1.name = 'O Poço';
    filme1.rating = 8;

    this.movies.push(filme1);

    const filme2 = new Movie();
    filme2.name = 'Bad Boys';
    filme2.rating = 10;

    this.movies.push(filme2);

    const filme3 = new Movie();
    filme3.name = 'Coringa';
    filme3.rating = 10;

    this.movies.push(filme3);
  }


  ngOnInit(): void {
  }

  selectMovie(movie: Movie) {
    this.selMovie = movie;
    this.isAddingNewMovie = false;

  }

  newMovie() {
    this.selMovie = new Movie();
    this.isAddingNewMovie = true;
  }

  addMovie() {
    if (this.isAddingNewMovie) {
    this.movies.push(this.selMovie);
    this.selMovie = null;
    } else {
      this.selMovie = null;
    }
  }

  removeMovie(pos: number) {
   if  (confirm( ' DESEJA MESMO EXCLUIR ESTE ITEM ? ' )) {
    // Remove itens a partir de uma posição do array
    this.movies.splice(pos, 1);
   }
  }
}
