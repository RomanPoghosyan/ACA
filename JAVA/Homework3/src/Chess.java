public class Chess {
    public static void main(String args[]){
        ChessBoard chess = new ChessBoard();
//        for (int i = 0; i < chess.board.length; i++){
//            for(int j = 0; j < chess.board[i].length; j++){
//                if(chess.board[i][j] != null) {
//                    System.out.println("Color: " + chess.board[i][j].getColor() + " Type: " + chess.board[i][j].getType());
//                }
//            }
//        }
        ChessPosition chessP = new ChessPosition(chess);
        System.out.println(chessP.getFigure('A',2));
    }
}
