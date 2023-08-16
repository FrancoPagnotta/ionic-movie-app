import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadComponent: () => import('./movies/movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./movie/movie.component').then((m) => m.MovieComponent),
  },
];
