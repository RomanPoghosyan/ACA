package chess;

public class Figure {
    private Colors color;
    private Figures type;
    Figure(Colors color,Figures type){
        setColor(color);
        setType(type);
    }

    public String toString(){
        return "Type: " + getType() + ", Color: " + getColor();
    }

    String getColor(){
        return color.toString();
    }

    String getType() {
        return type.toString();
    }

    private void setColor(Colors color) {
        this.color = color;
    }

    private void setType(Figures type) {
        this.type = type;
    }
}
