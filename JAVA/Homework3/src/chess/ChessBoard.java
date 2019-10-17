package chess;
import java.lang.reflect.*;

public class ChessBoard {
    private ChessFigure[][] board = new ChessFigure[8][8];

    public ChessBoard() {
        int i = 0, j = 0;

        for(Colors color : Colors.values()) {
            for (int p = 0; p < 8; p++) {
                if (j == 8) {
                    j = 0;
                    i++;
                }
                board[i][j] = new Pawn(color);
                j++;
            }
            for (int r = 0; r < 2; r++) {
                if (j == 8) {
                    j = 0;
                    i++;
                }
                board[i][j] = new Rook(color);
                j++;
            }
            for (int kn = 0; kn < 2; kn++) {
                if (j == 8) {
                    j = 0;
                    i++;
                }
                board[i][j] = new Knight(color);
                j++;
            }
            for (int b = 0; b < 2; b++) {
                if (j == 8) {
                    j = 0;
                    i++;
                }
                board[i][j] = new Bishop(color);
                j++;
            }
            if (j == 8) {
                j = 0;
                i++;
            }
            board[i][j] = new Queen(color);
            j++;

            if (j == 8) {
                j = 0;
                i++;
            }
            board[i][j] = new King(color);
            j++;
            i += 4;
        }
    }
    public ChessFigure getFigureAtPosition(int x, int y){
        return board[x][y];
    }

    public ChessFigure getFigureAtPosition(ChessPosition chp){
        return board[chp.getRowIndex()][chp.getColumnIndex()];
    }

    public boolean isValidMove(ChessPosition from, ChessPosition to){
        ChessFigure f = getFigureAtPosition(from);
        if(f != null) {
            ChessFigure destF = getFigureAtPosition(to);
            int fromX = from.getRowIndex();
            int fromY = from.getColumnIndex();
            int toX = to.getRowIndex();
            int toY = to.getColumnIndex();
            Colors color = f.getColor();
            if (destF != null) {
                Colors destColor = destF.getColor();
                if(destColor == color) return false;
            }
            return f.isMoveValid(fromX, fromY, toX, toY, color);
        }
        return false;
    }
}
