
class LinkedList<T> {
    public _element:ListElement<T> = null;

    public add(value:T):void {
        if (null === this._element) {
            this._element = new ListElement(value);
            this._element.prev = this._element;
            this._element.next = this._element;
        } else {
            const newElement = new ListElement(value);
            newElement.prev = this._element;
            newElement.next = this._element.next;
            newElement.next.prev = newElement;
            this._element = newElement;
        }
    }

    public get current():ListElement<T> {
        return this._element;
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

console.log('current', list.current.value);
console.log('prev', list.current.prev.value);
console.log('prev prev', list.current.prev.prev.value);
console.log('next', list.current.next.value);

const list2 = new LinkedList();
list2.add(15);
list2.add(20);

console.log('current', list2.current.value);
console.log('prev', list2.current.prev.value);
console.log('prev prev', list2.current.prev.prev.value);
console.log('next', list2.current.next.value);