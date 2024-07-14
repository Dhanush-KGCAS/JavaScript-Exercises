// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");



/* Further Adventures
*
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
*
* 3) What happens when you change the
*    number to 3? Why?
*   
*/

// Answer: it prints out the 3rd index value of the PlayerName Argument. But in the name 'Dax', There is no 3rd index value so it returns Undefined.