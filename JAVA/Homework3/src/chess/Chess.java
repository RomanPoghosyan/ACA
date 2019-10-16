package chess;

public class Chess {
    public static void main(String[] args){
        ChessBoard chess = new ChessBoard();

        try {
            ChessPosition chessP = new ChessPosition('C', 5);
            Figure f = chess.getFigureAtPosition(chessP);
            System.out.println(f);

            ChessPosition chessPTo = new ChessPosition('E', 4);
            System.out.println( chess.isValidMove(chessP,chessPTo) );


        } catch (Exception e){
            System.out.println("Error: " + e);
        }

    }
}
