import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres = new Array<Genre>();

  selGenre: Genre = null;

  editMode = false;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.refreshGenres();
  }

  refreshGenres() {
    this.genres = this.genreService.list();
  }

  selectGenre(genre: Genre) {
    this.selGenre = genre;
    this.editMode = true;
  }

  newGenre() {
    this.editMode = false;
    this.selGenre = new Genre();
  }
  cancel() {
    this.selGenre = null;
  }
  save() {
    if (this.editMode) {
      this.genreService.update(this.selGenre);
    } else {
      this.genreService.insert(this.selGenre);
    }
    this.cancel();
    this.refreshGenres();
  }
  remove(id: number) {
    this.genreService.remove(id);
    this.refreshGenres();
  }
}
