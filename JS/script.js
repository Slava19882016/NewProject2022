'use strict';

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", "");
    }
} 
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ("Один из последних просмотренных фильмов?", ""),
              b = prompt ("На сколько Вы его оцениваете?", "");
    
        if (a != null && b != null && a !== "" && b != "" && a < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }      
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 20) {
        console.log("Вы просмотрели очень мало фильмов");
    } else if (personalMovieDB.count >=20 && personalMovieDB.count <50) {
        console.log("Вы классический любитель кино");
    } else if (personalMovieDB.count >= 50) {
        console.log("Вы тратите слишком много времени на кино");
    } else {
        console.log("error");
    };
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();







