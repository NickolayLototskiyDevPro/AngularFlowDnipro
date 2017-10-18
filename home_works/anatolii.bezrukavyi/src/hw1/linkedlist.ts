// SZ Implementation is good in general

// SZ each class interface or enum should be in separate file
interface IList<T> {
    push(item: T): void;
    getAllItems():Array<T>;
}

class ListNode<T> {
    private prev: ListNode<T>;
    private next: ListNode<T>;
    private data: T;
    
    public static create<T>(data:T, prev:ListNode<T>): ListNode<T>{
        let node = new ListNode<T>();
        if (prev !== undefined) {
            node.prev = prev;
            prev.next = node;
        }
        node.data = data;
        return node;
    }

    public get nextItem(): ListNode<T> {
        return this.next;
    }
    public get prevItem(): ListNode<T> {
        return this.prev;
    }
    public get payload(): T {
        return this.data;
    }
}

export class LinkedList<T> implements IList<T>{
    private head: ListNode<T>;
    private tale: ListNode<T>;
    
    // SZ missed access modifiers
    push(item:T): void {
        let nodeToAdd = ListNode.create<T>(item, this.tale);
        this.head = this.head || nodeToAdd;
        this.tale = nodeToAdd;
    }

    getAllItems(): Array<T>{
        let nodeToCheck = this.head;
        let accumulator = new Array<T>();
        while (nodeToCheck) {
            accumulator.push(nodeToCheck.payload)
            nodeToCheck = nodeToCheck.nextItem
        }
        return accumulator;
    }
}

var list = new LinkedList<string>();