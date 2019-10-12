package com.aca;

public class Homework2 {
    public static void main(String args[]){
        Calculations ca = new Calculations();

//        Given a number. Print “odd” if the number is odd and “even” if it’s even.
        boolean task1 = ca.isEven(7);
        System.out.println("Task 1 : " + task1);

//        Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
        int task2 = ca.isDivisable(12,36);
        System.out.println("Task 2 : " + task2);

//        Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
        String task3 = ca.multipleN(12);
        System.out.println("Task 3 : " + task3);

//        Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
        String task4 = ca.moveFromEndToStart(5812);
        System.out.println("Task 4 : " + task4);

//        Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
        double task5 = ca.avg(12,12,4,4,3);
        System.out.println("Task 5 : " + task5);

//        Given three numbers. Sort them by the ascending order.
        int[] arr6 = {12,50,4,5,23};
        int[] task6 = ca.sortArr(arr6);
        System.out.print("Task 6 : ");
        for(int i : task6){
            System.out.print(i + ",");
        }
        System.out.println();

//        Find the sign of product of three numbers without multiplication operator. Display the specified sign.
        int[] arr7 = {12, 5, -8, 6, -3};
        String task7 = ca.checkSign(arr7);
        System.out.println("Task 7 : " + task7);

//        Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).
        String task8 = ca.quadratic(5, -13, 6);
        System.out.println("Task 8 : " + task8);

//        Given the following code rewrite it using only two if operators. (Hint: use logical operators).
        System.out.println("Task 9 : Just code quality");
//        Insert a digit and a number. Check whether the digits contains in the number or not.
        String task10 = ca.includesN(108, 8);
        System.out.println("Task 10 : " + task10);

//        Enter a number. Reverse its first and last digits. Print the new number.
        String task11 = ca.reverseFirstAndLast(8456);
        System.out.println("Task 11 : " + task11);

//        Write a program which will compute the area of a rectangular or a triangle after
//        prompting the user to type the name of the figure name. Also check that entered
//        numbers are positive. For the triangle entered numbers are height and and base.
        try{
            double task12 = ca.computeArea("triangle", 3, 4);
            System.out.println("Task 12 : " + task12);
        }catch (Exception e){
            System.out.println("Task 12 : " + e);
        }
//        (***) Enter a number. Find the difference between its biggest and smallest digits.
        double task13 = ca.findDifference(2519886);
        System.out.println("Task 13 : " + task13);
    }
}
