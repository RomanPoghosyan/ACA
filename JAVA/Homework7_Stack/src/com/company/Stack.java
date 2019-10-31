package com.company;

abstract class Stack<TElement>
{
    /**
     * adds item from end
     * @param element of type TElement
     */
    abstract void push(TElement element);

    /**
     *
     * @return TElement from end
     * @throws Exception if stack is empty
     */
    abstract TElement pop() throws Exception;

    /**
     *
     * @return size of the stack
     */
    abstract int size();

    /**
     *
     * @return last element of the stack
     * @throws Exception when stak is empty
     */
    abstract TElement pick() throws Exception;

    /**
     *
     * @return true is stack is empty
     */
    abstract boolean isEmpty();

    /**
     *
     * @param e
     * @return true if stack contains TElement e
     */
    abstract boolean contains(TElement e);

    /**
     *
     * @param e
     * @return true if TElement e was removed
     */
    abstract boolean remove(TElement e);

    /**
     * removes all elements from stack
     */
    abstract void clear();

    /**
     *
     * @param s
     * @return true if all elements were added
     * @throws Exception if Stack s is empty
     */
    abstract boolean addAll(Stack<? extends TElement> s) throws Exception;
}