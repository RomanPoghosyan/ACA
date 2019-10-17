package chess;

public class Rook extends ChessFigure {
    public Rook(Colors color){
        setColor(color);
    }

    @Override
    public boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color) {
        return fX == tX || fY == tY;
    }
}
