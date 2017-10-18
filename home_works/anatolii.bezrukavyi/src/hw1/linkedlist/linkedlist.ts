// SZ Implementation is good in general

import { IList } from './ilist';
import { ListNode } from './listnode';

export class LinkedList<T> implements IList<T>{
    private head: ListNode<T>;
    private tale: ListNode<T>;

    public push(item:T): void {
        let nodeToAdd = ListNode.create<T>(item, this.tale);
        this.head = this.head || nodeToAdd;
        this.tale = nodeToAdd;
    }

    public getAllItems(): Array<T>{
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