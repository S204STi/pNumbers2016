/*Roy Chase
/*February 2016
/*Program which accepts phone numbers in a variety of formats, and returns the "largest" current number.*/
//I used lots of console logs to make sure each function was working properly. Comment out if you'd like.
//User input
function userInput() {
    var pNumbersArr = [];

    while(true) {
        var input = prompt("Please enter any number of phone numbers. Leave blank and press 'OK' when finished.");

        if(input == "") {
            return pNumbersArr;
        }
        if(input.length > 8 && input.length < 15) {
            pNumbersArr.push(input);
        } else {
            confirm("That's not a valid phone number.");

        }
    }
}

/*String parsing
/*Since phone numbers in this case aren't numbers but rather strings, I assigned them to an array of strings above. Now I need to parse them.*/
function findLargest(pNumbersArr) {
    var largestSum= 0;
    var largestSumIndex=0;
     //for each pNumber in array
    for (var i = 0; i < pNumbersArr.length; i++) {
        var current = pNumbersArr[i];
        var sum = 0;
        
        console.log("Starting the outer loop for pNumber:" + current);
        //for each char in pNumber
        for (var j=0; j<current.length; j++) {

            //Add value of integers to sum
            sum += parseInt(current[j]) || 0;
            console.log("We are on array slot " + j + " and it brought the sum to " + sum);
        }

        //if the pNumber just parsed is equal to or larger than biggest so far, make it equal to largestSum
        if(sum >= largestSum) {
            largestSum = sum;
            largestSumIndex = i;
        }

    }

    //send to user the largest pNumber from arr
    return pNumbersArr[largestSumIndex];
    console.log(pNumbersArr[largestSumIndex]);
}

//testing
//var arr1 = ["555-555-5555", "(970)215-2770","(970)-944-3397","970-222-2105"];

//console.log(findLargest(arr1));

//uncomment following line to run as usual
console.log(findLargest(userInput()));