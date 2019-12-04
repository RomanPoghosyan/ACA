package com.company.converter;

import com.company.argsparser.ArgumentParser;
import com.company.converter.commands.Add;
import com.company.converter.commands.Convert;

import java.io.*;
import java.nio.file.Files;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) throws IOException {
        ArgumentParser parser = new ArgumentParser();
        parser.register("add", new Add());
        parser.register("convert", new Convert());

        parser.parse(args);



//        String c;
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        System.out.println("Enter q");
//        do {
//            c = br.readLine();
//            System.out.println(c);
//        }while (!c.equals("stop"));



    }
}
