// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

var multipleChoise1 = {
    question: "give details about movie 1"
}

var multipleChoise2 = {
    question: "give details about movie 2"
}

var multipleChoise3 = {
    question: "give details about movie 3"
}

function QandA(){
    console.log(multipleChoise1.question);
    showMovieInfo(movie1)
    console.log(multipleChoise2.question);
    showMovieInfo(movie2)
    console.log(multipleChoise3.question);
    showMovieInfo(movie3)
}

movie = movie1;

movie = movie2;

movie = movie3;




/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */