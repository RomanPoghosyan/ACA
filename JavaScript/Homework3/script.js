/* Task 1 */

function starPatternX(n){
    let result = "";
    for(let i = 0; i < n; i++){
        let row = new Array(n).fill(" ");
        row[i] = "*";
        row[n - 1 - i] = "*";
        result += row.join("");
        result += "\n";
    }
    return result;
}

// console.log(starPatternX(5));

/* Task 2 */

function frequencyOfEachUniqueNumber(arr){
    let nums = {};
    for(let i = 0; i < arr.length; i++){
        if(nums[arr[i]]) nums[arr[i]]++;
        else nums[arr[i]] = 1;
    }
    for(let n in nums){
        nums[n] = nums[n] / arr.length;
    }
    return nums;
}

// console.log(frequencyOfEachUniqueNumber([1,2,4]));

/* Task 3 */

function numberOfIntegersAndStrings(arr){
    let result = {};
    result['Integers'] = arr.filter(item => typeof item == 'number' && !isNaN(item)).length; // !isNaN for NaNs
    result['Strings'] = arr.filter(item => typeof item == 'string').length;
    return result;
}

// console.log(numberOfIntegersAndStrings([1,5,'5','asd',9]));

/* Task 4 */

function findLongestWord(str) {
    str = str.split("-").join(",").split(",").join(" ").split(" ");
    str = str.filter(word => word != " ");
    str.sort((word1, word2) => word1.length - word2.length);
    return str[str.length - 1];
}

// console.log(findLongestWord(`A revolution without dancing is a revolution not worth having.`));

/* Task 5 */

function stringWithoutRepeatingCharacters(str) {
    let longest = "";
    let temp = "";
    for(let i = 0; i < str.length; i++){
        for(let j = i; j < str.length; j++) {
            if (str[j] != " " && temp.includes(str[j])) {
                if (temp.length >= longest.length) longest = temp;
                temp = "";
                break;
            }
            temp += str[j];
        }
    }

    return longest;
}

console.log(stringWithoutRepeatingCharacters('there are no two words in the english language more harmful than "good job".'));

/* Task 6 */

function moveCharAfterNextTwoChars(str) {
    str = str.split("");
    for(let i = 0; i + 3 <= str.length; i += 3){
        let temp = str.slice(i,i + 3);
        str.splice(i, 3, temp[1],temp[2], temp[0]);
    }
    return str.join("");
}
// console.log("aweyoolp");
// console.log(moveCharAfterNextTwoChars("aweyoolp"));

/* Task 7 */

function productOfBiggestNegativeNumbers(arr) {
    let result = 1;
    let maxNegative = -Infinity;
    let anyNegative = false;
    for (let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])) return "Invalid inpur";
        for(let j = 0; j < arr[i].length; j++){
            let current = arr[i][j];
            if(current > maxNegative && current < 0){
                maxNegative = current;
                anyNegative = true;
            }
        }
        if(maxNegative > -Infinity) {
            result *= maxNegative;
            maxNegative = -Infinity;
        }
    }
    return anyNegative ? result : "No negatives";
}

// console.log(productOfBiggestNegativeNumbers([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));

/* Task 8 */

function allPossibleSubsets(arr) {
    if(arr.length < 3) return arr;
    let possibleVersions = [];
    for (let i = 0; i < arr.length; i++) {
        let version = [arr[i]];
        for (let j = 0; j < arr.length; j++) {
            if(i == j) continue;
            version[1] = arr[j]
            for (let n = 0; n < arr.length; n++) {
                if(i == n || j == n) continue;
                version[2] = arr[n];
                possibleVersions.push([...version]);
            }
        }
    }
    return possibleVersions;
}

// console.log(allPossibleSubsets([5, 9, 23, 0, -2, -1]));