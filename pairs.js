// === <README> ===
//
// Hello! We would like for you to solve this little problem.
//
// Doing so will demonstrate problem solving skills and knowledge of the javascript language.
//
// We expect you to solve this problem in 10 minutes.
//
// During the actual interview we will be working on another problem
// demonstrating your problem solving and JS language knowledge.
// You will have a similar amount of time.
//
// The function "pairs" below is what you need to update. Right now it returns the wrong result.
//
// Below the function pairs is our test suite written in plain javascript, to verify the pairs function.
//
// Please send back to us:
// - your solution and any additional instructions.
// - Indicate the time it took you to solve.
//   If you took more than 10 minutes that is fine.
//   Explain to us why that is the case.
//
// === USAGE ===
// $> node pairs.js
//
// If you don't want to use node this should run in the browser as it's plain javascript.
// You can set that up, just send us any additional files and instructions.
//
// If you run it right now, you will see:
// """
// pairs('abc') should return ['ab','c_'] but did not. Please fix the pairs function.
// pairs('abcdef') should return ['ab','cd', 'ef'] but did not. Please fix the pairs function.
// """
//
// === INSTRUCTIONS ===
//
// Fix the pairs function and until "Success!" is written to the console.
//
// === SUBMISSION ===
//
// Send a link to a google drive folder containing your files.
// OR send us a link to github gists for your files.
// OR send us a link to your github project.
//
// Send the link to your recruiter instructing them to forward it to us.
//
// === </README> ===

function pairs(str) {
    const pairs = []
    let currentStr = ''
    const strLength = str.length
    const loopTurns = strLength % 2 === 0 ? strLength : strLength - 1

    for (let i = 0; i < loopTurns; i++){
        const char = str[i]
        currentStr += char

        if(currentStr.length == 2){
            pairs.push(currentStr)
            currentStr = ''
        }

    }

    if(loopTurns < strLength){
        pairs.push(str[strLength-1] + '_')
    }

    return pairs;
}


// === <IGNORE> ===
//
// Ignore the section below. This is just a had written test case validation.
// Fix the pairs function util "Success!" is written to the console.

const case1Result = pairs('abc');
const case2Result = pairs('abcdef');

if (!Array.isArray(case1Result) || case1Result.join('|') !== 'ab|c_') {
    console.log("pairs('abc') should return ['ab','c_'] but did not. Please fix the pairs function.");
} else if (!Array.isArray(case2Result) || case2Result.join('|') !== 'ab|cd|ef') {
    console.log("pairs('abcdef') should return ['ab','cd', 'ef'] but did not. Please fix the pairs function.");
} else {
    console.log('Success!');
}

// === </IGNORE> ===
