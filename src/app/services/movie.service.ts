import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/Movie.interface';
import { MoviesApiResponse } from '../interfaces/MoviesApiResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient: HttpClient) { }

  getTopRatedMovies(pageNumber?: number): Observable<Movie[]> {
    return this._httpClient.get<MoviesApiResponse>(`${environment.baseUrl}/movie/popular`, {
      params: {
        api_key: environment.apiKey,
        page: pageNumber ?? 1
      }
    }).pipe(
      map(response => response.results)
    )
  }

  getMovieDetails(id: string) {
    return this._httpClient.get(`${environment.baseUrl}/movie/${id}`);
  }
}
