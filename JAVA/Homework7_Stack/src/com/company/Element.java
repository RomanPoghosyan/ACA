package com.company;

class Element<TElement> {
    private TElement currentValue;
    private Element prev;
    
    Element(TElement current, Element element){
        setCurrentValue(current);
        setPrev(element);
    }

    public TElement getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(TElement currentValue) {
        this.currentValue = currentValue;
    }

    public Element getPrev() {
        return prev;
    }

    public void setPrev(Element prev) {
        this.prev = prev;
    }
}
