class NonDecoratedObject {
    public value: string;
    public id: number;
}

class DecoratedObject extends NonDecoratedObject {
    public hash: string;
}

function decorateObject(nonDecoratedObject:NonDecoratedObject): DecoratedObject {
    const res:DecoratedObject = new DecoratedObject();
        res.value = nonDecoratedObject.value;
        res.id = nonDecoratedObject.id;
        res.hash = nonDecoratedObject.value + nonDecoratedObject.id.toString();

        return res;
}

const nonDecoratedObject = new NonDecoratedObject();
nonDecoratedObject.value = 'str';
nonDecoratedObject.id = 34567;

const newObject = decorateObject(nonDecoratedObject);
console.log(newObject.hash);