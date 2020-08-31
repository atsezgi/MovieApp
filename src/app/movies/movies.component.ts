import { Component, TemplateRef } from '@angular/core';
import {Movies} from '../movie.datasource';
import { Movie } from '../movie';

@Component({
    selector:'movies', //<movies></movies>
    templateUrl:'movies.component.html'

})
export class MoviesComponent{
    title = "Movie List";
    movies = Movies; //Movies from the movie.datasource
    selectedMovie: Movie;

    onSelect(movie:Movie): void {
        this.selectedMovie = movie;
    }

}