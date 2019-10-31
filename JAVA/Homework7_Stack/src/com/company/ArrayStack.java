package com.company;

class ArrayStack<TElement> extends Stack<TElement>
{
    private Element last;
    private Element current;

    ArrayStack(){
        last = null;
        current = null;
    }

    @Override
    public void push(TElement tElement) {
        last = current;
        current = new Element(tElement, last);
    }

    @Override
    public TElement pop() throws Exception {
        if(current == null) throw new Exception("Stack is empty");;
        Element temp = current;
        current = last;
        if(last != null) {
            last = last.getPrev();
        }
        return (TElement) temp.getCurrentValue();
    }

    @Override
    public TElement pick() throws Exception {
        if(current != null && current.getCurrentValue() != null) {
            return (TElement) current.getCurrentValue();
        } else {
            throw new Exception("Stack is empty");
        }
    }

    @Override
    public boolean isEmpty() {
        return this.size() == 0;
    }

    @Override
    public boolean remove(TElement e) {
        int i;
        Element temp = current;
        Element last = null;
        for(i = 0; temp != null; i++){
            if(temp.getCurrentValue() == e) {
                last.setPrev(temp.getPrev());
                return true;
            }
            last = temp;
            temp = temp.getPrev();
        }
        return false;
    }

    @Override
    public boolean addAll(Stack<? extends TElement> s) throws Exception {
        int i;

        for(i = 0; !s.isEmpty(); i++){
            this.push(s.pop());
        }
        return false;
    }

    @Override
    public void clear() {
        last = null;
        current = null;
    }

    @Override
    public boolean contains(TElement e) {
        int i;
        Element temp = current;

        for(i = 0; temp != null; i++){
            if(temp.getCurrentValue() == e) return true;
            temp = temp.getPrev();
        }
        return false;
    }

    @Override
    public int size() {
        int i;
        Element temp = current;

        for(i = 0; temp != null; i++){
            temp = temp.getPrev();
        }
        return i;
    }


}