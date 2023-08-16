export interface Movie {
    adult?:            boolean;
    backdropPath?:     string;
    genreIDS?:         number[];
    id?:               number;
    originalLanguage?: string;
    originalTitle?:    string;
    overview?:         string;
    popularity?:       number;
    posterPath?:       string;
    releaseDate?:      Date;
    title?:            string;
    video?:            boolean;
    voteAverage?:      number;
    voteCount?:        number;
}
