package com.company.converter.commands;

import com.company.argsparser.Command;

import java.io.FileWriter;
import java.io.IOException;

public class Add implements Command {
    @Override
    public void execute(String[] input) {
        String str = input[1] + " " + input[2] + " " + input[3] + "\n";
        FileWriter fw =  null;
        try {
            fw = new FileWriter("test.txt", true);
            fw.write(str);
            fw.close();
        }catch (Exception e){
            System.out.println("Error");
        }finally {

        }
        System.out.println(str);
    }

    @Override
    public String description(){
        return "Adds a new currency";
    }
}
