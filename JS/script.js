'use strict';

const numberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt ("Один из последних просмотренных фильмов?", ""),
//       b = prompt ("На сколько Вы его оцениваете?", ""),
//       c = prompt ("Один из последних просмотренных фильмов?", ""),
//       d = prompt ("На сколько Вы его оцениваете?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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

if (personalMovieDB.count < 20) {
    console.log("Вы просмотрели очень мало фильмов");
} else if (personalMovieDB.count >=20 && personalMovieDB.count <50) {
    console.log("Вы классический любитель кино");
} else if (personalMovieDB.count >= 50) {
    console.log("Вы тратите слишком много времени на кино");
} else {
    console.log("error");
}

console.log(personalMovieDB);