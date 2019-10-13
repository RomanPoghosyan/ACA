/* Task 1 */
{
    alert(`1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.`);

    function isPrime(num) {
        if(isNaN(num)) return "Invalid input!";
        if(num == 1 || num == -1) return "Yes";
        if(num == 0) return "No";

        let half = Math.ceil(num / 2);

        for(let i = 2; i < half; i++){
            if(num % i == 0){
                return "No";
            }
        }

        return "Yes";
    }

    let number = +prompt("Enter number to check if it is prime!");

    alert(isPrime(number));
}

/* Task 2 */
{
    alert(`2. Given a number n ( n>= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5,
8 …, a k = a k-1 + a k-2 )`);

    function fibonacciNth(n) {
        if(isNaN(n) || n < 0) return "Invalid input!";
        if(n == 0) return 0;
        if(n == 1 || n == 2) return 1;
        let current = 1;
        let last = 1;
        function fib(n){
            if(n == 3) return last + current;
            let count = last + current;
            last = current;
            current = count;
            return fib(n - 1);
        }

        return fib(n);
    }

    let number = +prompt("Enter number");

    alert(fibonacciNth(number));
}
/* Task 3 */
{
    alert(`3. Given a number n( n&gt; 0 ). Print Fibonacci series up to n.`);

function fibonacciTillNth(n) {
    if(isNaN(n) || n < 1) return "Invalid input!";
    let number =  n;
    let result = [0];
    if(n == 1) return result;
    result.push(1,1);
    if(n == 2 || n == 3) return result;
    let current = 1;
    let last = 1;
    function fib(n){
        let count = last + current;
        if(number <= count){return result}
        result.push(count);
        last = current;
        current = count;
        return fib(n - 1);
    }

    return fib(n);
}

let number = +prompt("Enter number");

alert(fibonacciTillNth(number));
}
/* Task 4 */
{
    alert(`4. Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder.`);

    function quotientOrReminder(num) {
        if(isNaN(num)) return "Invalid input!";
        if(num == 0) return "Cannot calculate";

        let strNum = String(num);

        let sum = 0;
        let product = 1;
        for(let char of strNum){
            sum += +char;
            product *= +char;
        }

        if(product < sum) return "product is less than sum";

        if(product % sum == 0){
            return "‘Quotient is " + (product / sum);
        }else{
            return "Reminder is " + (product % sum);
        }
    }

    let number = +prompt("Enter number!");

    alert(quotientOrReminder(number));
}
/* Task 9 */
{
    alert(`9. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers
by the given num length over the specified interval (from a to b).`);

    function arrayOfEvenlySpacedNumbers(num1, num2, iLength) {
        if(isNaN(num1) || isNaN(num2) || isNaN(iLength) || num1 > num2) return "Invalid input!";

        let diff = num2 - num1;
        let intervalStep = diff / (iLength - 1);
        let result = [];
        let current = num1;

        console.log(current);
        for(let i = 0; i < iLength; i++, current += intervalStep){
            result.push(parseFloat(current.toFixed(1)));
        }

        return result.join(",  ");
    }

    let number1 = +prompt("Enter first number!");
    let number2 = +prompt("Enter second number!");
    let intertvalLength = +prompt("Enter length!");

    // let res = arrayOfEvenlySpacedNumbers(number1, number2, intertvalLength);

    alert(arrayOfEvenlySpacedNumbers(number1, number2, intertvalLength));
}
/* Task 10 */
{
    alert(`10. Given an array of numbers. Find the index of the second maximum element.`);

    function indexOdSeccondMax(nums) {
        nums = nums.split(', ');

        let max = {
            value: -Infinity,
            indexOfVal: 0
        }
        let second = {
            value: -Infinity,
            indexOfVal: 0
        }
        for(let i = 0; i < nums.length; i++){
            nums[i] = Number(nums[i]);
            if(isNaN(nums[i])) return "Invalid input!";

            if(nums[i] > max.value){
                second.value = max.value;
                second.indexOfVal = max.indexOfVal;
                max.value = nums[i];
                max.indexOfVal = i;
            }else if(nums[i] > second.value){
                second.value = nums[i];
                second.indexOfVal = i;
            }
        }
        return second.indexOfVal;
    }

    let numbers = prompt("Enter numbers separated with ', ' for example 2, 4, 99, 1 !");

    alert(indexOdSeccondMax(numbers));
}
/* Task 11 */
{
    alert(`11. Given an array of numbers, padding amount and repeat count. Pad the array in the
following way: the padding amount specifies how many elements should be taken from
the array edges, the repeat amount specifies how many times the pad should be
repeated. Also, you should check that padding amount <= length of array.`);

    function paddingArray(nums, paddingA, repeatC) {
        if(isNaN(paddingA) || isNaN(repeatC)) return "Invalid input";

        nums = nums.split(', ').join('');
        if(nums.search(/[^0-9]/ig) != -1) return "Invalid input";

        if(nums.length < paddingA) return "Invalid padding amount";

        let start = nums.slice(0, paddingA);
        let end = nums.slice(-paddingA);
        for(let i = 0; i < repeatC; i++){
            nums = start + nums + end;
        }

        return nums.split('');
    }

    let numbers = prompt("Enter numbers separated with ', ' for example 1, 2, 3, 4 !");
    let paddingAmount = +prompt("Enter padding amount!");
    let repeatCount = +prompt("Enter repeat count!");

    alert(paddingArray(numbers, paddingAmount, repeatCount));
}