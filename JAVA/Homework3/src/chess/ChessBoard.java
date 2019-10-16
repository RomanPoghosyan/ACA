package chess;

enum Figures {
    Pawns(8), Rooks(2), Knights(2), Bishops(2), Queen(1), King(1);
    private int count;
    Figures(int p){
        count = p;
    }

    int getCount(){
        return count;
    }
}

enum Colors {
    White, Black
}

public class ChessBoard {
    private Figure[][] board = new Figure[8][8];

    ChessBoard() {
        int i = 0, j = 0;
        for (Figures f : Figures.values()) {
            for (int count = 0; count < f.getCount(); count++) {
                for (Colors c : Colors.values()) {
                    if (j == 8) {
                        j = 0;
                        i++;
                    }
                    board[i][j] = new Figure(c, f);
                    j++;
                }
            }
        }
    }
    Figure getFigureAtPosition(int x, int y){
        return board[x][y];
    }

    Figure getFigureAtPosition(ChessPosition chp){
        return board[chp.getRowIndex()][chp.getColumnIndex()];
    }

    boolean isValidMove(ChessPosition from, ChessPosition to){
        Figure f = getFigureAtPosition(from);
        int fromX = from.getRowIndex();
        int fromY = from.getColumnIndex();
        int toX = to.getRowIndex();
        int toY = to.getColumnIndex();
        String color = f.getColor();
        final boolean forQueenAndBishops = Math.abs(fromX - toX) == Math.abs(fromY - toY);
        final boolean forQueenAndRooks = fromX == toX || fromY == toY;

        switch (f.getType()){
            case "Pawns":
                if(color.equals("black")){
                    return fromX == toX && toY - fromY < 3 && toY - fromY > 0;
                }else{
                    return fromX == toX && fromY - toY < 3 && fromY - toY > 0;
                }
            case "Rooks":
                return forQueenAndRooks;
            case "Knights":
                return ( Math.abs(fromX - toX) == 2 && Math.abs(fromY - toY) == 1 ) ||
                       ( Math.abs(fromX - toX) == 1 && Math.abs(fromY - toY) == 2 );
            case "Bishops":
                return forQueenAndBishops;
            case "Queen":
                return forQueenAndBishops || forQueenAndRooks;
            case "King":
                return Math.abs(fromX - toX) < 2 && Math.abs(fromY - toY) < 2;
            default:
                return false;
        }
    }
}
