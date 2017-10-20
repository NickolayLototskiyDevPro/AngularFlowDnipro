class LinkedList<T> {
    public element:ListElement<T>;

    public add(value:T):void {
        if (null === this.element) {
            element = new ListElement(value, )
        }
    }
}

class ListElement<T> {
    public value:T;
    public next: ListElement<T>;
    public prev: ListElement<T>;

    constructor(value: T, next:ListElement<T>, prev:ListElement<T>) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}