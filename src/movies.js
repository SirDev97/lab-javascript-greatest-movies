// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    const directors = arr.map(function (movie) {
        return movie.director;
    });
    return [...new Set(directors)];
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const result = arr.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true;
        }
    });
    return result.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) return 0;
    const averageRate = arr.reduce(function (acc, val) {
        return acc + (val.rate || 0)
    }, 0) / arr.length;
    return Number(averageRate.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramas = arr.filter(function (movie) {
        return movie.genre.includes('Drama');
    });
    return ratesAverage(dramas);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const sorted = arr.slice().sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sorted;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const sorted = arr.map(function (movie) {
        return movie.title;
    }).sort(function (a, b) {
        return a.localeCompare(b);
    }).slice(0, 20);
    return sorted;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average