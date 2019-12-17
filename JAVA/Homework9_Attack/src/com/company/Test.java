package com.company;

import com.company.attack.Attack;

public class Test {
    public static void main(String[] args) {
        Attack attack = new Attack("https://www.list.am/", 500, 100);
        attack.start();
    }
}
