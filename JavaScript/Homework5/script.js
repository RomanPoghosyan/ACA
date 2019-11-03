/* Task 1 */

function removeFirsElement(arr, i = 0, res = []){
    if(i == arr.length - 1) return res;
    res[i] = arr[i + 1];
    return removeFirsElement(arr, i + 1, res);
}

// console.log(removeFirsElement([7,8,1,2]));


/* Task 2 */

function concatNestedArrays(arr, res = []){
    for(let item of arr){
        if(Array.isArray(item)){
            concatNestedArrays(item, res);
        }else{
            res.push(item);
        }
    }
    return res;
}

// console.log(concatNestedArrays([1, [3, 4, [1, 2]], 10]));


/* Task 3 */

function sumOfDigits(num) {
    let sum = 0;
    for(let digit of String(num)){
        sum += +digit;
    }
    if(sum < 10){
        return sum;
    } else {
        return sumOfDigits(sum);
    }
}

// console.log(sumOfDigits(29));
// console.log(sumOfDigits(999999999999));


/* Task 4 */

function rotateArray(arr, n){
    if(n == 0) return arr;
    if(n > 0) {
        arr.push(arr.shift());
        return rotateArray(arr, n - 1);
    } else {
        arr.unshift(arr.pop());
        return rotateArray(arr, n + 1);
    }
}

// console.log(rotateArray( ['a', 'b', 'c', 'd', 'e', 'f', 'g','‘h'], 3) );
// console.log(rotateArray( ['a', 'b', 'c', 'd', 'e', 'f', 'g','‘h'], -2) );


/* Task 5 */

function invertObject(obj) {
    let res = {};
    for(let key in obj){
        if(res.hasOwnProperty(obj[key])){
            res[obj[key]] = [...res[obj[key]], key];
        }else {
            res[obj[key]] = key;
        }
    }
    return res;
}

// console.log(invertObject({ a: '1', b: '2' }));
// console.log(invertObject({ a: '1', b: '2', c: '2', d: '2'  }));


/* Task 6 */

function sortByPercentAndReadStatus(arr) {
    return arr.sort((a, b) => {
        if(b.readStatus){
            if(a.readStatus){
                if((a.percent - b.percent) >= 0){
                    return -1;
                }else{
                    return 1
                }
            }else {
                return 1
            }
        } else {
            if(a.readStatus){
                return -1
            }else {
                return 1
            }
        }
    });
}

let readers = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Catcher in the Rye", readStatus: true, percent: 110},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "White Nights", readStatus: false, percent: 10 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
];

console.log(sortByPercentAndReadStatus(readers));

