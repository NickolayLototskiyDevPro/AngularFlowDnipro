// SZ each class interface or enum should has own file
// SZ same for mixins homework

class LinkedListNode<T>{

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

class LinkedList<T> {
    private _root: LinkedListNode<T>;
    private _tail: LinkedListNode<T>;

    constructor();
    constructor(array: Array<T>);
    constructor(array?: Array<T>) {
        if (array) {
            array.map(val => this.insertLast(val));
        }
    }

    public get root(): LinkedListNode<T> {
        return this._root;
    }

    public get tail(): LinkedListNode<T> {
        return this._tail;
    }

    private find(value: T): LinkedListNode<T> {
        let curr: LinkedListNode<T> = this._root;
        while (curr) {
            if (curr.value === value) {
                break;
            }
            curr = curr.next;
        }
        return curr;
    }

    public remove(value: T): boolean {
        const node: LinkedListNode<T> = this.find(value);
        if (node) {
            const next = node.next;
            const prev = node.prev;
            if (prev) {
                prev.next = next;
            } else {
                this._root = next;
            }
            if (next) {
                next.prev = prev;
            } else {
                this._tail = prev;
            }
        } else {
            return false;
        }
    }

    public removeFirst(): void {
        if(this._root){
            if(this._root === this._tail){
                this._root = this._tail = null;
            } else {
                this._root.next.prev = null;
                this._root = this._root.next;
            }
        }
    }

    public removeLast(): void {
        if(this._tail){
            if(this._tail === this._root){
                this._root = this._tail = null;
            } else {
                this._tail.prev.next = null;
                this._tail = this._tail.prev;
            }
        }
    }

    public insertAfter(prevValue: T, value: T): LinkedListNode<T> {
        const node: LinkedListNode<T> = this.find(prevValue);
        let inserted: LinkedListNode<T> = null;
        if (node) {
            const next = node.next;
            inserted = new LinkedListNode<T>(value, node, next);
            node.next = inserted;
            if (next) {
                next.prev = inserted;
            } else {
                this._tail = inserted;
            }
        }
        return inserted;
    }

    public insertBefore(nextVal: T, value: T): LinkedListNode<T> {
        const node: LinkedListNode<T> = this.find(nextVal);
        let inserted: LinkedListNode<T> = null;
        if (node) {
            const prev = node.prev;
            inserted = new LinkedListNode<T>(value, prev, node);
            node.prev = inserted;
            if (prev) {
                prev.next = inserted;
            } else {
                this._root = inserted;
            }
        }
        return inserted;
    }

    public insertFirst(value: T) {
        const ins = new LinkedListNode<T>(value, null, this._root);
        if (this._root) {
            this._root.prev = ins;
        }
        this._root = ins;
        if (!this._tail) {
            this._tail = this._root;
        }
    }

    public insertLast(value: T) {
        const ins = new LinkedListNode<T>(value, this._tail, null);
        if (this._tail) {
            this._tail.next = ins;
        }
        this._tail = ins;
        if (!this._root) {
            this._root = this._tail;
        }
    }

    public map(callback: (value: T, node?: LinkedListNode<T>) => void) {
        let curr: LinkedListNode<T> = this._root;
        while (curr) {
            callback(curr.value, curr);
            curr = curr.next;
        }
    }

    public length(): number {
        let counter = 0;
        this.map(() => counter++);
        return counter;
    }

    public toArray(): Array<T> {
        let arr: Array<T> = [];
        this.map(v => arr.push(v));
        return arr;
    }

    public toString(): string {
        let res = '[';
        this.map((val, node) => {
            res = res.concat(val.toString() + (node.next ? ',' : ''));
        });
        return res + ']';
    }
}

const list = new LinkedList<number>([1, 2, 3]);
console.log(list.toString());
list.insertFirst(0);
console.log(list.toString());
list.insertLast(4);
console.log(list.toString());
list.insertAfter(3, 3.5);
console.log(list.toString());
list.insertBefore(3, 2.5);
console.log(list.toString());
list.remove(2.5);
list.remove(3.5);
console.log(list.toString());
list.removeFirst();
console.log(list.toString());
list.removeLast();
console.log(list.toString());
console.log(`Length: ${list.length()}`);