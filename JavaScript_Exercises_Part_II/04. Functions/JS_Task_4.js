// Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    

function Longest_Country_Name(countryList) {
    let longestCountry = countryList[0];
    for (let i = 1; i < countryList.length; i++) {
        if (countryList[i].length > longestCountry.length) {
            longestCountry = countryList[i];
        }
    }
    return longestCountry;
}

console.log(Longest_Country_Name(['USA', 'Canada', 'Afghanistan'])) // Output: Afghanistan



/* --------------------------------------------------------------------------------- */