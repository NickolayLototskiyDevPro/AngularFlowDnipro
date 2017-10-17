interface IList<T> {
    push(item: T): void;
    getAllItems():Array<T>;
}

class SuperList<T> implements IList<T>{
    private list:Array<T> = [];

    push(item:T): void {
        this.list.push(item);
    }

    getAllItems(): Array<T>{
        return this.list;
    }
}

var list = new SuperList<string>();

