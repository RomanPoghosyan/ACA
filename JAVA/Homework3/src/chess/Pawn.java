package chess;

public class Pawn extends ChessFigure {
    public Pawn(Colors color){
        setColor(color);
    }

    @Override
    public boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color) {
        if(color.equals(Colors.Black)){
            return fX == tX && tY - fY < 3 && tY - fY > 0;
        }else{
            return fX == tX && fY - tY < 3 && fY - tY > 0;
        }
    }
}
