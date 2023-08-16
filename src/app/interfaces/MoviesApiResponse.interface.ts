import { Movie } from './Movie.interface';

export interface MoviesApiResponse {
  page:         number;
  results:      Movie[];
  totalPages:   number;
  totalResults: number;
}
