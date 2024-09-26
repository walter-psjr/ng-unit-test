import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movie-catalog'
  },
  {
    path: 'movie-catalog',
    loadChildren: () => import('./domains/movie-catalog/movie-catalog.routes')
      .then(m => m.MOVIE_CATALOG_ROUTES)
  }
];
