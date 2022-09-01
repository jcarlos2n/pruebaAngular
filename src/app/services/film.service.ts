import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=fbbcf142e94e48a30cb4b8bd37d2fc74&language=en-US");
  }

  getById(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fbbcf142e94e48a30cb4b8bd37d2fc74&language=en-US`)
  }
}
