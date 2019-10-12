package com.aca;

public class Calculations {
    public boolean isEven(int a){
        return a % 2 == 0;
    }

    public int isDivisable(int a, int b) {
        return a > b ? (a % b == 0 ? 1 : 0) : (b % a == 0 ? 1 : 0);
    }

    public String multipleN(int num){
        String result = "";
        for(int i = 1; i <= 3; i++){
            result += num * i;
        }
        return result;
    }

    public String moveFromEndToStart(int num){
        String result = String.valueOf(num);

        Character temp = result.charAt(result.length() - 1);

        if(temp.equals('0')) return result;
        double d = num / 10;
        d = Math.floor(d);
        int value = (int) d;
        return "" + temp + value;
    }

    public double avg(int num1, int num2, int num3, int num4, int num5) {
        return (num1 + num2 + num3 + num4 + num5) / 5;
    }

    public int[] sortArr(int[] arr) {
        for (var i = 0; i < arr.length - 1; i++){
            for (var j = i + 1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    var temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        return arr;
    }

    public String checkSign(int[] numbers) {
        int lessThanZero = 0;
        for(var i = 0; i < numbers.length; i++){
            if(numbers[i] == 0){
                return "unsigned";
            }else if (numbers[i] < 0){
                lessThanZero++;
            }
        }
        return lessThanZero != 0 ? (lessThanZero % 2 == 0 ? "+" : "-") : "+";
    }

    public String quadratic(int a, int b, int c) {
        double d = Math.pow(b,2) - 4 * a * c;
        if(d < 0) return "Solution does not exists";
        else if(d == 0){
            double x =  -b / (2 * a);
            return "Solution is " + x;
        } else {
            double x1 = ( -b + Math.sqrt(d) ) / (2 * a);
            double x2 = ( -b - Math.sqrt(d) ) / (2 * a);
            return "Solutions are " + x1 + " and " + x2;
        }
    }

    public void betterCode(){
        int n = 7;
        int i = 0;
        int j = 0;

        if(n % 2 == 0 && Math.floor(n / 10) != 0){
            i++;
        }

        if(n % 3 == 0 && n % 10 == 1){
            j++;
        }
    }

    public String includesN(int number, int n){
        return String.valueOf(number).contains(String.valueOf(n)) ? "Yes" : "No";
    }

    public String reverseFirstAndLast(int num){
        String result = String.valueOf(num);

        Character temp = result.charAt(result.length() - 1);

        if(temp.equals('0')) return result;

        return "" + temp + result.substring(1,result.length() - 1) + result.charAt(0);
    }

    public double computeArea(String type, int a, int b) throws Exception{
        switch (type) {
            case "triangle":
                return (a * b) / 2;
            case "rectangle":
                return a * b;
            default:
                throw new Exception("Unknown type");
        }
    }

    public double findDifference(int num){
        String str = String.valueOf(num);
        String[] numArr = str.split("");
        var max = Double.NEGATIVE_INFINITY;
        var min = Double.POSITIVE_INFINITY;

        for(var i = 0; i < numArr.length; i++){
            if(Integer.valueOf(numArr[i]) > max) max = Integer.valueOf(numArr[i]);
            if(Integer.valueOf(numArr[i]) < min) min = Integer.valueOf(numArr[i]);
        }

        return max - min;
    }
}
