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


//class HelloWorld {
//    public static void main(String args[]) {
//        Apple ap = Apple.Winesap;
//        System.out.println(ap.getPrice());
//    }
//}

enum Colors {
    White, Black
}

public class ChessBoard {
    public Figure[][] board = new Figure[8][8];
    private int i = 0, j = 0;

    ChessBoard() {
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
}
