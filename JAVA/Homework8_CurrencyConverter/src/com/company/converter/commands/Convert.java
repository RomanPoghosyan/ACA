package com.company.converter.commands;

import com.company.argsparser.Command;

import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Convert implements Command {
    @Override
    public void execute(String[] input) {
//        System.out.println(input[1] + " " + input[2]);

        try {
//            File file = new File("test.txt");
//            file.createNewFile();


            Pattern pattern = Pattern.compile("(?<=" + input[1] + " " + input[2] + " )\\d+");
            Pattern patternReverse = Pattern.compile("(?<=" + input[2] + " " + input[1] + " )\\d+");


            String line;
            String currency = null;
            boolean found = false;
            BufferedReader bufferedReader = new BufferedReader(new FileReader("test.txt"));
            while ((line = bufferedReader.readLine()) != null){
                String output = find(pattern,line);
                if(output != null){
                    System.out.println(Integer.parseInt(output) * Integer.parseInt(input[3]));
                    found = true;
                    break;
                }
                output = find(patternReverse,line);
                if(output != null){
                    System.out.println(Integer.parseInt(input[3]) / Integer.parseInt(output));
                    found = true;
                    break;
                }
            }
            if(!found){
                System.out.println("Not found such currency");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String find(Pattern pattern, String line){
        Matcher matcher = pattern.matcher(line);
        String currency = null;
        while (matcher.find()) {
            currency = line.substring(matcher.start(), matcher.end());
            break;
        }
        return currency;
    }

    @Override
    public String description() {
        return "Converts currencies";
    }
}
