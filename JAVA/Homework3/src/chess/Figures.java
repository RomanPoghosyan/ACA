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
