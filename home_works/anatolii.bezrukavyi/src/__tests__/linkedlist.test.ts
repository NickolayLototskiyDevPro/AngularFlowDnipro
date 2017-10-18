import { LinkedList } from '../hw1/linkedlist';

it('creates LinkedList, adds 1,2,3 reads', () => {
    let target = new LinkedList<number>();
    target.push(1);
    target.push(2);
    target.push(3);
    expect(target.getAllItems()).toEqual([1,2,3]);
});