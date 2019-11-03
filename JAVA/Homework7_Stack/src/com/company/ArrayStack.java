package com.company;

import java.util.Collection;
import java.util.Iterator;
import java.util.Spliterator;
import java.util.function.Predicate;
import java.util.stream.Stream;

public class ArrayStack<TElement> implements Collection {
    private Element last;
    private Element current;

    ArrayStack(){
        last = null;
        current = null;
    }

    public void push(TElement tElement) {
        last = current;
        current = new Element(tElement, last);
    }

    public TElement pop() throws Exception {
        if(current == null) throw new Exception("Stack is empty");
        Element temp = current;
        current = last;
        if(last != null) {
            last = last.getPrev();
        }
        return (TElement) temp.getCurrentValue();
    }

    public TElement peek() throws Exception {
        if(current != null) {
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
    public void clear() {
        last = null;
        current = null;
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

    @Override
    public boolean removeIf(Predicate filter) {
        return false;
    }

    @Override
    public Spliterator spliterator() {
        return null;
    }

    @Override
    public Stream stream() {
        return null;
    }

    @Override
    public Stream parallelStream() {
        return null;
    }

    @Override
    public boolean contains(Object e) {
        int i;
        Element temp = current;

        for(i = 0; temp != null; i++){
            if(temp.getCurrentValue().equals(e)) return true;
            temp = temp.getPrev();
        }
        return false;
    }

    @Override
    public Iterator iterator() {
        return null;
    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }

    @Override
    public Object[] toArray(Object[] a) {
        return new Object[0];
    }

    @Override
    public boolean add(Object o) {
        return false;
    }

    @Override
    public boolean remove(Object e) {
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
    public boolean containsAll(Collection c) {
        return false;
    }

    @Override
    public boolean addAll(Collection c) {
        return false;
    }

    public boolean addAll(Stack<TElement> s) throws Exception {
        int i;

        for(i = 0; !s.isEmpty(); i++){
            this.push(s.pop());
        }
        return false;
    }

    @Override
    public boolean removeAll(Collection c) {
        return false;
    }

    @Override
    public boolean retainAll(Collection c) {
        return false;
    }
}