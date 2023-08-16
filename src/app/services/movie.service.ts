import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient: HttpClient) { }

  getTopRatedMovies(): Observable<Object> {
    return this._httpClient.get(`${environment.baseUrl}/movie/popular`, {
      params: {
        api_key: environment.apiKey
      }
    });
  }
}
