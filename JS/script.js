'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt ("Сколько фильмов Вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel:function() {
        if (personalMovieDB.count < 20) {
            console.log("Вы просмотрели очень мало фильмов");
        } else if (personalMovieDB.count >=20 && personalMovieDB.count <50) {
            console.log("Вы классический любитель кино");
        } else if (personalMovieDB.count >= 50) {
            console.log("Вы тратите слишком много времени на кино");
        } else {
            console.log("error");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt (`Ваш любимый жанр под номером ${i}`);

            if (genre === "" || genre == null) {
                console.log("Вы ввели не корректные данные");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;

            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    } 
};











