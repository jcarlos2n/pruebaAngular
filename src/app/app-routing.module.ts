import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './components/film/film-detail/film-detail.component';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"films", component: FilmListComponent},
  {path:'films/:id', component: FilmDetailComponent},
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
