package com.company.argsparser;

import java.util.HashMap;
import java.util.Map;

public class ArgumentParser {
    private Map<String, Command> commands = new HashMap<>();

    public void parse(String[] input) {
        //proxy
        if (input.length > 0 && commands.containsKey(input[0])) {
            commands.get(input[0]).execute(input);
        }
        else {
            printHelp();
        }
    }

    public void register(String key, Command command) {
        commands.put(key, command);
    }

    private void printHelp() {
        for (String key : commands.keySet()) {
            System.out.println(key + "     " + commands.get(key).description());
        }
    }
}
