/* Task 1 */
{
    alert(`Given a number. Print “odd” if the number is odd and “even” if it’s even.`);

    function isEven(num) {
        num = Number(num);
        return !isNaN(num) ? (num % 2 === 0 ? "Even" : "Odd") : "Invalid input";
    }

    let number = prompt("Enter number to check if it is even!");

    alert(isEven(number));
}
/* Task 2 */
{
    alert(`Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.`);

    function isDivisable(a, b) {
        a = Number(a);
        b = Number(b);
        if(isNaN(a) || isNaN(b) || a == null || b == null){
            return "Invalid input";
        }
        return a > b ? (a % b == 0 ? 1 : 0) : (b % a == 0 ? 1 : 0);
    }

    let number1 = prompt("Enter the first number");
    let number2 = prompt("Enter the second number");
    alert(isDivisable(number1, number2));
}
/* Task 3 */
{
    alert(`Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).`);
    function multipleN(num){
        let result = '';
        num = Number(num);

        if(isNaN(num) || num == null) return "Invalid input";

        for(let i = 1; i <= 3; i++){
            result += num * i;
        }
        return result;
    }

    let number = prompt("Enter number");
    alert(multipleN(number));
}
/* Task 4 */
{
    alert(`Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.`);
    function moveFromEndToStart(num){
        if(isNaN(num) || num == null) return "Invalid input";
        let temp = num[num.length - 1];

        if(+temp == 0) return num;
        num = Math.floor(+num / 10);
        return temp + num;
    }

    let number = prompt("Enter number");
    alert(moveFromEndToStart(number));
}
/* Task 5 */
{
    alert(`Given five numbers as input. Calculate and print the average of the numbers(without
using arrays).`);
    function avg(num1,num2,num3,num4,num5) {
        if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
            return "Invalid input";
        }
        return (num1 + num2 + num3 + num4 + num5) / 5;
    }
    let n1 = +prompt("Enter first number");
    let n2 = +prompt("Enter second number");
    let n3 = +prompt("Enter third number");
    let n4 = +prompt("Enter fourth number");
    let n5 = +prompt("Enter fifth number");

    alert(avg(n1, n2, n3, n4, n5))
}
/* Task 6 */
{
    alert(`Given three numbers. Sort them by the ascending order.`);
    function sort(arr) {
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = i + 1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        return arr;
    }

    let nums = [];
    let error = false;

    for(let i = 0; i < 3; i++){
        let num = +prompt(`Enter number ${i+1}`);
        if(isNaN(num)){
            error = true;
            break;
        }
        nums.push(num);
    }

    alert(error ? "Invalid input" : sort(nums));
}
/* Task 7 */
{
    alert(`Find the sign of product of three numbers without multiplication operator. Display the
specified sign.`);
    function checkSign(numbers) {
        for(let i = 0; i < numbers.length; i++){
            if(isNaN(numbers[i]) || numbers[i] == null) return "Invalid input";
        }
        let lessThanZero = 0;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] == 0){
                return "unsigned";
            }else if (numbers[i] < 0){
                lessThanZero++;
            }
        }
        return lessThanZero ? (lessThanZero % 2 == 0 ? '+' : '-') : '+';
    }

    let nums = [];

    for(let i = 0; i < 3; i++){
        nums.push(prompt(`Enter number ${i+1}`));
    }

    alert(checkSign(nums));
}
/* Task 8 */
{
    alert(`Input three numbers a, b, c respectively, where a is a non zero number and write a
program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).`);
    function quadratic(a,b,c) {
        if (a == 0 || isNaN(a) || isNaN(b) || isNaN(c)) return "invalid input";
        let d = Math.pow(b,2) - 4 * a * c;
        if(d < 0) return "Solution does not exists";
        else if(d == 0){
            let x =  -b / (2 * a);
            return `Solution is ${x}`;
        } else {
            let x1 = ( -b + Math.sqrt(d) ) / (2 * a);
            let x2 = ( -b - Math.sqrt(d) ) / (2 * a);
            return `Solutions are ${x1} and ${x2}`;
        }

    }

    let a = +prompt("Enter a (not 0)");
    let b = +prompt("Enter b");
    let c = +prompt("Enter c");
    alert(quadratic(a,b,c));
}
/* Task 9 */
{
    alert(`Given the following code rewrite it using only two if operators. (Hint: use logical
operators).`);
    let n = +prompt('Enter Number');

    let i = 0;
    let j = 0;

    if(n % 2 === 0 && !Math.floor(n / 10)){
        i++;
    }

    if(n % 3 === 0 && n % 10 === 1){
        j++;
    }
}
/* Task 10 */
{
    alert(`10. Insert a digit and a number. Check whether the digits contains in the number or not.`);
    let number = prompt("Enter the number");
    let digit = prompt("Enter the digit");
    alert(number.indexOf(digit) != -1 ? "Yes" : "No");
}
/* Task 11 */
{
    alert(`Enter a number. Reverse its first and last digits. Print the new number.`);
    function reverseFirstAndLast(num){
        if(isNaN(num) || num == null) return "Invalid input";
        let temp = num[num.length - 1];
        if(+temp == 0) return num;
        return temp + num.slice(1,-1) + num[0];
    }

    let number = prompt("Enter number");
    alert(reverseFirstAndLast(number));
}
/* Task 12 */
{
    alert(`Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered
numbers are positive.
For the triangle entered numbers are height and and base.`);
    function computeArea(type, a, b){
        if(isNaN(a) || a < 0 || isNaN(b) || b < 0) return "Only positive numbers allowed";
        switch (type) {
            case 'triangle':
                return (a * b) / 2
            break;
            case 'rectangle':
                return a * b;
            break;
            default:
                return "Unknown type";
        }
    }

    let type = prompt("Enter the shape");
    let number1 = +prompt("Enter first number");
    let number2 = +prompt("Enter second number");

    alert(computeArea(type, number1, number2));
}
/* Task 13 */
{
    alert(`(***) Enter a number. Find the difference between its biggest and smallest digits.`);
    function findDifference(num){
        if(isNaN(num)) return "Invalid input";
        let numArr = num.split('');
        let max = -Infinity;
        let min = Infinity;

        for(let i = 0; i < numArr.length; i++){
            if(numArr[i] > max) max = numArr[i];
            if(numArr[i] < min) min = numArr[i];
        }

        return max - min;
    }

    let number = prompt("Enter the number");

    alert(findDifference(number));
}












