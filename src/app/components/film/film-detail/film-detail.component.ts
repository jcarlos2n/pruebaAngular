import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  films:any = null;
  id:any = null;

  constructor(
    private _route: ActivatedRoute,
    private filmService: FilmService  
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.filmService.getById(this.id).subscribe((data:any) => this.films = data)
    
  }

}
