// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };

// console.log(obj.name);

// const arr = ["a", "b", "c"];
// const arrObj = {
//   a: "a",
//   1: "b",
//   3: "c",
// };

// arrObj.b = "1234";
// console.log(arrObj["b"]);
// console.log(arrObj.b);

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("как ваше имя?", "");
// answers[1] = prompt("как ваша фамилия?", "");
// answers[2] = prompt("сколько вам лет??", "");

// document.write(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
