/**
* 
* Logan's Simple Array Sorter
* Version: 1.0.0
* Date Started: 08/12/22
* Date Last Updated: 08/12/22
* Last Updated By: Logan-0
* 
*/


/** 
 * Comparing the string in a Json Object attr such as "lastName", or "firstName"
 * s1: String1, s2: String2
 * lc1: lowercase String1, lc2: lowercaseString2
 * 
 * compare values and return
 */
function compareString(stringArray) {
    var tempHoldingVar = stringArray.sort();
    return tempHoldingVar;
}


/** 
 * Comparing numbers
 * A basic comparison function must go into the original array sort;
 * since (2 > 1), standard sort will interpret (2 > 100) so we must implement a function within,
 * to compare numbers as a whole.
 * 
 * compare values and return
 */
function compareNumber(numberArray) {
    var tempHoldingVar = numberArray.sort(function (a, b) { return a - b });
    return tempHoldingVar;
}



/** 
 * Comparing string dates
 * 
 * Take Array of String Dates
 * 
 * Convert String Date to Date Object
 * 
 * Compare values and return most recent Date First
 */
function compareDate(dateArray) {

    var tempHoldingVar = [];

    console.log(tempHoldingVar)

    for (let i = 0; i < dateArray.length; i++) {

        tempHoldingVar.push(new Date(dateArray[i]));

    }

    tempHoldingVar = tempHoldingVar.sort(function (a, b) { return a - b });

    return tempHoldingVar
}

module.exports = { compareDate, compareNumber, compareString }
