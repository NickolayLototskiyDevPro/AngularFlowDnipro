class LinkedList<T> {
    public element:ListElement<T>;

    public add(value:T):void {
        if (null === this.element) {
            this.element = new ListElement(value);
            this.element.prev = this.element;
            this.element.next = this.element;
        } else {
            const newElement = new ListElement(value);
            newElement.prev = this.element;
            newElement.next = this.element.next;
            this.element = newElement;
        }
    }
}

class ListElement<T> {
    public value:T;
    public next: ListElement<T>;
    public prev: ListElement<T>;

    constructor(value: T) {
        this.value = value;
    }
}

const list = new LinkedList();
list.add('first');
list.add('second');
list.add('third');

console.log('current', list.element.value);
console.log('prev', list.element.prev.value);
console.log('prev prev', list.element.prev.prev.value);
console.log('next', list.element.next.value);