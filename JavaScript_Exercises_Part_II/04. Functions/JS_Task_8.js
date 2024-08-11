// Write a JavaScript function that takes an array of numbers and finds the second lowest 
// and second greatest numbers, respectively.
// Sample array : [100,200,300,400,500]
// Expected Output : 200,400

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */
function secondLowAndGreat(arr) {

    arr.sort((a, b) => a - b); // sort the array in ascending order

    let secondLowest = null;
    let secondGreatest = null;

    for(let i=1; i < arr.length; i++){
        if(secondLowest === null && secondGreatest === null){
            secondLowest = arr[i];
        }
        if(secondGreatest === null || arr[arr.length - i - 1] > secondGreatest) {  //to access elements from the end of the array, moving backwards.
            secondGreatest = arr[arr.length - i - 1];
        }
    }

    return [secondLowest, secondGreatest]
}

console.log(secondLowAndGreat([100,200,300,400,500]))

/* --------------------------------------------------------------------------------- */