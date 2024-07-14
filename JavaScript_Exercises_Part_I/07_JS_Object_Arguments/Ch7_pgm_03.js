// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

var buildCars = function(name, model, type, year){
    return{
        name: name,
        model: model,
        type: type,
        year: year
    }
}

let getCarsInfo = function(cars){
    // return cars.name.toUpperCase() + " " + cars.model + " " + cars.type + " " + cars.year;
    return `${cars.name.toUpperCase()}: ${cars.model}, \n${cars.type}, ${cars.year}`
}

car1 = buildCars('Ford', 'Mustang', 'Racing', 1995);
car2 = buildCars('Toyota', 'Supra', 'JDM', 2007)

console.log(getCarsInfo(car1))
console.log(getCarsInfo(car2))
/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */