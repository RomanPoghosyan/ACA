package chess;

public class King extends ChessFigure {
    public King(Colors color){
        setColor(color);
    }

    @Override
    public boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color) {
        return Math.abs(fX - tX) < 2 && Math.abs(fY - tY) < 2;
    }
}
