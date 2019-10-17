package chess;

public class Knight extends ChessFigure {
    public Knight(Colors color){
        setColor(color);
    }

    @Override
    public boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color) {
        return ( Math.abs(fX - tX) == 2 && Math.abs(fY - tY) == 1 ) ||
                ( Math.abs(fX - tX) == 1 && Math.abs(fY - tY) == 2 );
    }
}
