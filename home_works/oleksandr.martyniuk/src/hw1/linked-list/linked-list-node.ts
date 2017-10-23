export class LinkedListNode<T>{

    public prev: LinkedListNode<T>;
    public next: LinkedListNode<T>;
    public value: T;

    constructor(value: T)
    constructor(value: T, prev: LinkedListNode<T>, next: LinkedListNode<T>)
    constructor(value: T, prev?: LinkedListNode<T>, next?: LinkedListNode<T>) {
        this.value = value;
        if (prev) {
            this.prev = prev;
        }
        if (next) {
            this.next = next;
        }
    }
}
