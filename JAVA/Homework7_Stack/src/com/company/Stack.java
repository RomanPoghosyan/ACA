package com.company;

abstract class Stack<TElement>
{
    /**
     * adds item from end
     * @param element of type TElement
     */
    public abstract void push(TElement element);

    /**
     *
     * @return TElement from end
     * @throws Exception if stack is empty
     */
    public abstract TElement pop() throws Exception;

    /**
     *
     * @return size of the stack
     */
    public abstract int size();

    /**
     *
     * @return last element of the stack
     * @throws Exception when stak is empty
     */
    public abstract TElement pick() throws Exception;

    /**
     *
     * @return true is stack is empty
     */
    public abstract boolean isEmpty();

    /**
     *
     * @param e
     * @return true if stack contains TElement e
     */
    public abstract boolean contains(TElement e);

    /**
     *
     * @param e
     * @return true if TElement e was removed
     */
    public abstract boolean remove(TElement e);

    /**
     * removes all elements from stack
     */
    public abstract void clear();

    /**
     *
     * @param s
     * @return true if all elements were added
     * @throws Exception if Stack s is empty
     */
    public abstract boolean addAll(Stack<? extends TElement> s) throws Exception;
}