package chess;

public class Bishop extends ChessFigure {
    public Bishop(Colors color){
        setColor(color);
    }

    @Override
    public boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color) {
        return Math.abs(fX - tX) == Math.abs(fY - tY);
    }
}
