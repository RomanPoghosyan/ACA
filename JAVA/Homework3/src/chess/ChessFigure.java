package chess;

abstract public class ChessFigure {
    Colors color;
    abstract boolean isMoveValid(int fX, int fY, int tX, int tY, Colors color);

    public String toString(){
        return "Type: " + getType() + ", Color: " + getColor();
    }

    Colors getColor(){
        return color;
    }

    protected void setColor(Colors color) {
        this.color = color;
    }

    String  getType() {
        return this.getClass().getSimpleName();
    }
}
