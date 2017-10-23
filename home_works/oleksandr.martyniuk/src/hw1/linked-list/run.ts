import { LinkedListNode } from './linked-list-node';
import { LinkedList} from './linked-list';

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