package com.company.argsparser;

import java.io.IOException;

public interface Command {
    void execute(String[] input);
    String description();
}
