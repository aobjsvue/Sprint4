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
  const sortByYear = [...array].sort((a, b) => a.year - b.year);

  const sortAlphabetically = sortByYear.sort((a, b) => {
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

  console.log("EXERCISE 5 ->", sortAlphabetically);
  return sortAlphabetically;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const category = array.filter(movie => movie.genre.includes(genre));

  console.log("EXERCISE 6 ->", moviesAverageOfDirector(category));
  return moviesAverageOfDirector(category);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // Es crea un nou array, itinerant pels valors de l'array rebut, utilitzant un bucle
  // S'obté la duration de cada un d'aquests valor rebuts (en cada passada) (que en el primer cas seria: 
  // duration: '2h 22min',)
  // Utilitzant els mètodes més útils -per exemple split entre d'altres- (s'extrau en una variable el valor de l'hora (és a dir, en aquest cas 2) i en una altra variable: els minuts (en aquest cas 22))
  // Es realitza l'operaciò (multiplicació les hores per 60 i sumant els minuts)
  // El resultat d'aquesta operació modifica els valors del camp duration en el nou array (en cada pasada d'aquest bucle)
  // Finalment, es retorna (amb return) el nou array amb les dades del camp duration modificades.

  const durationToMinutes = array.map(movie => {
    let getHours = parseInt(movie.duration.split(' ')[0]) * 60;
    let getMinutes;
    if (typeof movie.duration.split(' ')[1] === 'string') {
      getMinutes = parseInt(movie.duration.split(' ')[1]);
    } else {
      getMinutes = 0;
    }
    array.duration = getHours + getMinutes;
    return {...movie, duration: array.duration};
  });
  
  console.log("EXERCISE 7 ->", durationToMinutes);
  return durationToMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  // Els usuaris/àries necessiten saber quina pel·lícula és la millor de cada any. Per dur a terme aquesta funcionalitat, hauràs de crear una funció que accepti l'any, i retorni la millor pel·lícula d'aquest any.
  // let filmsYear = array.filter(movie => movie.year === year);
  // let getHigherScore = filmsYear.sort((a, b) => b.score - a.score);
  // let showHigherScore = getHigherScore.slice(0,1)
  // console.log("EXERCISE 8 ->", showHigherScore);
  // return showHigherScore;

  const getHigherScore = array
    .filter(movie => movie.year)
    .sort((a, b) => b.score - a.score)
    .slice(0,1);
  
  console.log("EXERCISE 8 ->", getHigherScore);
  return getHigherScore;
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