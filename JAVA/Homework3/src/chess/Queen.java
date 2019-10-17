package chess;

public class Queen extends ChessFigure {
    public Queen(Colors color){
        setColor(color);
    }

    @Override
    public boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color) {
        return Math.abs(fX - tX) == Math.abs(fY - tY) || fX == tX || fY == tY;
    }
}
