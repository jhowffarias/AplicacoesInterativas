import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array <Movie>();
  selMovie: Movie = null;
  isAddingNewMovie = false;

  constructor(private movieService: MovieService) {

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
    this.movieService.insert(this.selMovie);
    this.movies = this.movieService.listAll();
    this.selMovie = null;
    } else {
      this.movieService.update(this.selMovie);
    }
  }

  removeMovie(id: number) {
   if  (confirm( ' DESEJA MESMO EXCLUIR ESTE ITEM ? ' )) {
    this.movieService.remove(id);
   }
  }
}
