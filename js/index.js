"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Why mach films did you see?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Why mach films did you see?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies seen?', ''),
            b = prompt('How much would you rate it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

remeberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Saw a few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a movieman');
    } else {
        console.log('Error');
    }
}

detectedPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i =1; i <= 3; i++) {
        personalMovieDB.genres[ -1] = prompt (`Your best genres is number ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);
