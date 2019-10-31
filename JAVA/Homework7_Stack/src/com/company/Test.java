package com.company;

public class Test {
    public static void main(String args[]) throws Exception {
        ArrayStack<Integer> stack = new ArrayStack<>();
        stack.push(16);
        stack.push(5);
        stack.push(12);
        stack.push(1);
//        System.out.println(stack.pop());
//        System.out.println(stack.pop());
//        System.out.println(stack.pop());
//        System.out.println(stack.pop());
//        System.out.println(stack.size());
//        System.out.println(stack.isEmpty());
        System.out.println(stack.contains(5));
        System.out.println(stack.remove(5));
        System.out.println(stack.contains(5));
        System.out.println(stack.contains(19));
        ArrayStack<Integer> stack2 = new ArrayStack<>();
        stack2.push(100);
        stack2.push(200);
        stack2.push(300);

        stack.addAll(stack2);

        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
    }
}
