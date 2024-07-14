// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    onlyLocation();
    onlyHealth();
    console.log("------------------------------");
    console.log("");
};

function onlyLocation(){
    console.log(player.name + " is in " + player.place);
}

function onlyHealth(){
    console.log(player.name + " has health " + player.health);
}

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */