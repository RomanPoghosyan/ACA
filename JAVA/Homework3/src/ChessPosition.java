import java.util.Arrays;

public class ChessPosition {
    private Figure[][] board;
    private Character[] letters = {'A','B','C','D','E','F','G','H'};
    ChessPosition(ChessBoard cb){
        board = cb.board;
    }
    public String getFigure(char x, int y){
        int chessX = Arrays.asList(letters).indexOf(x);
        int chessY = y - 1;
        if(chessX > board.length || chessY > board[0].length){
            return "Invalid input";
        }
        String figureType = board[chessX][chessY].getType().toString();
        String figureColor = board[chessX][chessY].getColor().toString();
        return "Type: " + figureType + ", Color: " + figureColor;
    }
}
