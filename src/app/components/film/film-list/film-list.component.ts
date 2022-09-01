import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films:any = null;

  constructor(private filmService:FilmService) { }

  ngOnInit(){
    this.filmService.getFilms().subscribe( (data:any) => this.films = data.results);

  }
}
