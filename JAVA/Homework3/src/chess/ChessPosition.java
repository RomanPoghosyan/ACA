package chess;

import java.util.Arrays;

public class ChessPosition {
    private Character[] letters = {'A','B','C','D','E','F','G','H'};
    private char row;
    private int column;

    public ChessPosition(char x, int y) throws Exception{
        int index = Arrays.asList(letters).indexOf(x);
        if(index == -1 || y < 1 || y > 8){
            throw new Exception("Invalid position");
        }
        row = x;
        column = y;
    }

    int getRowIndex() {
        return Arrays.asList(letters).indexOf(row);
    }

    int getColumnIndex() {
        return column - 1;
    }

    public char getRow() {
        return row;
    }

    public int getColumn() {
        return column;
    }
}
