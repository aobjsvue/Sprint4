// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let filmsDirector = array.filter(movie => movie.director === director);
  console.log("EXERCISE 2 ->", filmsDirector);
  return filmsDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let numFilms = 0;

  let scoreFilms = array.reduce((sumScore, movie) => {
    if (movie.director === director && movie.score !== '') {
      sumScore += movie.score;
      numFilms++;
    }
    return sumScore;
  }, 0);
  
  let averageScore = Number((scoreFilms / numFilms).toFixed(2));
  console.log("EXERCISE 3 ->", averageScore);
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const sortByTitle = array
    .map(movie => movie.title)
    .sort()
    .slice(0,20);
  
  console.log("EXERCISE 4 ->", sortByTitle);
  return sortByTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortByYear = [...array].sort((a, b) => a.year - b.year); /* [...array] realiza una copia del array original, así cumplimos con "should return a new array" */

  const sortSameYear = sortByYear.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (b.title > a.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  console.log("EXERCISE 5 ->", sortSameYear);
  return sortSameYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const category = array.filter(movie => movie.genre.includes(genre));

  console.log("EXERCISE 6 ->", moviesAverageOfDirector(category));
  return moviesAverageOfDirector(category);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}