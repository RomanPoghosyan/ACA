package test;

import chess.ChessBoard;
import chess.ChessFigure;
import chess.ChessPosition;

public class ChessTest {
    public static void main(String[] args){
        ChessBoard chess = new ChessBoard();

        try {
            ChessPosition chessP = new ChessPosition('H', 5);
            ChessFigure f = chess.getFigureAtPosition(chessP);
            System.out.println(f);

            ChessPosition chessPTo = new ChessPosition('F', 3);
            System.out.println( chess.isValidMove(chessP,chessPTo) );


        } catch (Exception e){
            System.out.println("Error: " + e);
        }
    }
}
