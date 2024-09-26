import { Routes } from '@angular/router';

import { MovieCatalogComponent } from './movie-catalog.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

export const MOVIE_CATALOG_ROUTES: Routes = [
  {
    path: '',
    component: MovieCatalogComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movie-search'
      },
      {
        path: 'movie-search',
        component: MovieSearchComponent
      }
    ]
  }
];

export default MOVIE_CATALOG_ROUTES;
