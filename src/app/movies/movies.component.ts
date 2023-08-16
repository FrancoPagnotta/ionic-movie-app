import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { MovieService } from '../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { first } from 'rxjs';
import { Movie } from '../interfaces/Movie.interface';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule,
    HeaderComponent,
  ],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];
  public pageNumber: number = 1;

  constructor(
    private _movieService: MovieService,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getTopRatedMovies();
  }

  async getTopRatedMovies(): Promise<void> {
    const loading = await this._loadingController.create({
      message: 'Loading...',
      duration: 3000,
    });
    loading.present();

    this._movieService
      .getTopRatedMovies(this.pageNumber)
      .pipe(first())
      .subscribe((movies: Movie[]) => {
        this.movies = [...this.movies, ...movies];
        loading.dismiss();
      });
  }

  onIonInfinite($event: any): void {
    console.log($event);
  }
}
