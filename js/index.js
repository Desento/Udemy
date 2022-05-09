"use strict";

const numberOfFilms = +prompt('Why mach films did you see?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('One of the last movies seen?', ''),
      b = prompt('How much would you rate it?', ''),
      c = prompt('One of the last movies seen?', ''),
      d = prompt('How much would you rate it?', '');

personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);
