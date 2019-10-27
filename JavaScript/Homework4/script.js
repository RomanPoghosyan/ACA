/* Task sub arrays recursion */
/* Version first, the best I think */
function subArrays(arr, n, result = [], temp = []){
    if(n == 0){
        result.push([...temp]);
        return true;
    }

    for(let i = 0; i < arr.length; i++){
        temp.push(arr[i]);
        subArrays(arr.slice(i + 1), n - 1, result, temp);
        temp.pop();
    }
    return result;
}

console.log(subArrays([1,2,3,4], 2));

/* Version second */
function subArr (arr, n, iterate = true, result = []){
    // debugger;
    if(n == 1){
        return arr.map(el => [el]);
    }else{
        for(let i = 0; i < arr.length + 1; i++) {
            let first = [arr[0]];
            arr = arr.slice(1);
            if(iterate == false){
                return subArr(arr, n - 1, false, result).map(el => first.concat(el));
            }else {
                result.push(...subArr(arr, n - 1, false, result).map(el => first.concat(el)));
            }
        }
        return result;
    }
}

console.log(subArr([1,2,3,4], 2));


/* Task 1 */

function greatherThan(arr, num){
    let filtered = arr.filter(n => n > num);
    return filtered.length > 0 ? filtered : "Such values do not exist.";
}

console.log( greatherThan([7,4,12,5,1], 6) );

/* Task 2 */

function onlyEvenDigits(num1, num2) {
    function allDigitsAreEven(num) {
        if (num == 0) return true;
        let reminder = num % 10;
        if (reminder % 2 != 0) return false;
        return allDigitsAreEven(Math.floor(num / 10));
    }

    let result = [];

    for(let i = num1; i <= num2; i++) {
        if(allDigitsAreEven(i)) result.push(i);
    }
    return result.length ? result : "Such numbers does not exist.";
}

console.log(onlyEvenDigits(19,42));

/* Task 3 */

function allDigitsAreOdd(num){
    if(num == 0) return true;
    let reminder = num % 10;
    if(reminder % 2 == 0) return false;
    return allDigitsAreOdd(Math.floor(num / 10));
}

console.log(allDigitsAreOdd(7139));

/* Task 4 */

function minPositivNum(arr, index = 0, min = Infinity) {
    if(index == arr.length - 1) return min == Infinity ? -1 : min;
    if(arr[index] < min && arr[index] >= 0) min = arr[index];
    return minPositivNum(arr, ++index, min);
}

console.log(minPositivNum([45, -9, 15, 5, -78]));

/* Task 5 */

function vioaltedOrder(arr){
    for (let i = 0; i + 1 < arr.length; i++){
        if(arr[i] > arr[i + 1]) return i + 1;
    }
    return -1;
}

console.log(vioaltedOrder([2, 12, 15, 48, 64]));