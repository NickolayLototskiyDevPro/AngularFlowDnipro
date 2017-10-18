export class ListNode<T> {
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